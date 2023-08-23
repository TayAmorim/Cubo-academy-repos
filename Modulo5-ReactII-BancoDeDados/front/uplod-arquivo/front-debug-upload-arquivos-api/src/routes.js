const Router = require('express');

const routes = Router();

const { createGenericUpload, base64Upload } = require('./controllers/upload');

const { uploadConfig } = require('./configs/multer.config');

routes.get('/health', (req, res) => {
  return res.status(200).send('Server is running');
});

routes.post('/upload/multipart', uploadConfig.single('file'), createGenericUpload);
routes.post('/upload/base64', base64Upload);

module.exports = routes;