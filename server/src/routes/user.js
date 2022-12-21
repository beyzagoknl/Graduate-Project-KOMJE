import express from "express";

import {
  register,
  login,
  verifyAccount,
  forgotPassword,
  updatePassword,
} from "../controllers/user.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/:id/verify/:token/", verifyAccount);
userRouter.post("/forgotPassword", forgotPassword);
userRouter.post("/:id/reset/:token", updatePassword);
export default userRouter;
