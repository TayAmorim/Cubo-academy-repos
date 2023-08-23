require('dotenv').config();
const B2 = require('backblaze-b2');

const b2 = new B2({
  applicationKeyId: process.env.B2_KEY_ID,
  applicationKey: process.env.B2_KEY,
});

async function uploadFile(filename, file) {
  await b2.authorize();

  const { data: { uploadUrl, authorizationToken } } = await b2.getUploadUrl({
    bucketId: process.env.B2_BUCKET_ID,
  });

  await b2.uploadFile({
    uploadUrl,
    uploadAuthToken: authorizationToken,
    filename,
    data: file,
  });

  const url = `https://f004.backblazeb2.com/file/${process.env.B2_BUCKET_NAME}/${filename}`;

  return url;
}

module.exports = { uploadFile };
