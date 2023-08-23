const uuid = require('uuid');

const generateUuid = (info) => {
  const newUuid = uuid.v4(info);
  return newUuid;
};

module.exports = {
  generateUuid,
};
