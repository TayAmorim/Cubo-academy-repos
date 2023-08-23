const multer = require('multer');
const { generateUuid } = require('../helpers/handleUuid');
const path = require('path');

const maxSizeInBytes = 200 * 1024 * 1024;

const uploadFolder = path.resolve(__dirname, '../tmp/uploads');

const uploadConfig = multer({
  storage: multer.diskStorage({
    destination: uploadFolder,
    filename(req, file, callback) {
      const fileType = file.mimetype.split('/')[1];

      const filename = `${generateUuid()}.${fileType}`;

      return callback(null, filename);
    },
  }),
  limits: {
    fileSize: maxSizeInBytes,
  },
  fileFilter: (req, file, callback) => {
    const allowedMimes = [
      'image',
      'video',
    ];

    const mediaType = file.mimetype.split('/')[0];

    if (allowedMimes.includes(mediaType)) {
      callback(null, true);
    } else {
      req.fileValidationError = 'Somente imagens e vídeos são permitidos.';

      callback(null, false);
    }
  },
});

module.exports = {
  uploadConfig,
};
