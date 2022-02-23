const db = require("../models");
const normalizeDBQuery = require("../utils/normalizeDBQuery.js");

class ImageRepository {
  create(options) {
    return normalizeDBQuery(db.Image.create(options));
  }

  findOne(query) {
    return normalizeDBQuery(db.Image.findOne(query, "-__v"));
  }
  find() {
    return normalizeDBQuery(db.Image.find());
  }
}

module.exports = new ImageRepository();
