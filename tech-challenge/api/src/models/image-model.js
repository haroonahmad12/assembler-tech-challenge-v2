const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ImageSchema = Schema(
  {
    imageUrl: {
      type: String,
      required: [true, "The url is required"],
      trim: true,
    },
    user: {
      type: String,
      required: [true, "The user id is required"],
      trim: true,
    },
    views: {
      type: Number,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Image = mongoose.model("image", ImageSchema);

module.exports = Image;
