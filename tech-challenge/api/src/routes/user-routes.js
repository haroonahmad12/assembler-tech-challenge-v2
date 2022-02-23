const Router = require("express").Router;

const { authMiddleware } = require("../middleware");
const { userController } = require("../controllers");

const userRouter = Router();

userRouter.post("/sign-up", authMiddleware, userController.signUp);
userRouter.post("/sign-out", authMiddleware, userController.signOut);
userRouter.post("/sign-in", authMiddleware, userController.signIn);

module.exports = {
  userRouter: userRouter,
};
