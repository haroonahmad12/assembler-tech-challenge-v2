const Router = require("express").Router;

const { authMiddleware } = require("../middleware");
const { imageController } = require("../controllers");

const imageRouter = Router();

imageRouter.post("/upload", authMiddleware, imageController.addImage);
imageRouter.post("/delete", authMiddleware, imageController.deleteImage);
imageRouter.get("/get", authMiddleware, imageController.getImages);

module.exports = {
  imageRouter: imageRouter,
};
