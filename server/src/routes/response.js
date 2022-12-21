import express from "express";
import { postResponse } from "../controllers/response.js";

const responseRouter = express.Router();

responseRouter.post("/", postResponse);

export default responseRouter;
