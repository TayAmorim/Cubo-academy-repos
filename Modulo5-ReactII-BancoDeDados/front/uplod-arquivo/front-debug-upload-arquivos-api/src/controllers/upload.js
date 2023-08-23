const fsp = require('fs/promises');
const path = require('path');
const { generateUuid } = require('../helpers/handleUuid');
const { uploadFile } = require('../services/upload');

const removeFileFromDisk = fsp.unlink;

const uploadFolder = path.resolve(__dirname, '../tmp/uploads');

async function createGenericUpload(request, response) {
  const { file, fileValidationError } = request;

  if (request.fileValidationError) {
    return response.status(400).json(fileValidationError);
  }

  if (!file) {
    return response.status(400).json('Escolha um arquivo para fazer upload');
  }

  const { filename, path } = file;

  const readFile = await fsp.readFile(`${uploadFolder}/${filename}`, (err, data) => {
    if (err) {
      throw err;
    }

    return data;
  });

  const upload = await uploadFile(filename, readFile);

  await removeFileFromDisk(path);

  return response.status(200).json({ url: upload });
}

async function base64Upload(request, response) {
  const { image } = request.body;

  if (!image) {
    return response.status(400).json('Escolha um arquivo para fazer upload');
  }

  const type = image.split(';')[0].split('/')[1];

  const filename = `${generateUuid()}.${type}`;

  const base64Image = image.split(';base64,').pop();

  const path = `${uploadFolder}/${filename}`;

  await fsp.writeFile(path, base64Image, { encoding: 'base64' });

  const readFile = await fsp.readFile(`${uploadFolder}/${filename}`, (err, data) => {
    if (err) {
      throw err;
    }

    return data;
  });

  const upload = await uploadFile(filename, readFile);

  await removeFileFromDisk(path);

  return response.status(200).json({ url: upload });
}

module.exports = {
  createGenericUpload,
  base64Upload
};
