const aws = require("aws-sdk");
require("aws-sdk/lib/maintenance_mode_message").suppress = true;

const endpoint = new aws.Endpoint(process.env.ENDPOINT);

const s3 = new aws.S3({
  endpoint,
  Credential: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const uploadFile = async (path, buffer, mimetype) => {
  const arquivo = await s3
    .upload({
      Bucket: process.env.BACKBLAZE_BUCKET,
      Key: path,
      Body: buffer,
      ContentType: mimetype,
    })
    .promise();

  return {
    url: arquivo.Location,
    path: arquivo.key,
  };
};

module.exports = uploadFile;
