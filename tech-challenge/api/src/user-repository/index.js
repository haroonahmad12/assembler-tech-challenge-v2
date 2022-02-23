const imageRepository = require("./image-repository");
const UserRepository = require("./user-repository");

module.exports = {
  UserRepo: UserRepository,
  ImageRepo: imageRepository,
};
