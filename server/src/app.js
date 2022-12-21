import express from "express";
import cors from "cors";
import passport from "passport";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";

import { config } from "./config/passport.js";
import userRouter from "./routes/user.js";
import eventRouter from "./routes/event.js";
import responseRouter from "./routes/response.js";

// Create an express server
const app = express();

const swaggerDocs = YAML.load("./api.yml");
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

config(passport);
app.use(passport.initialize());

// Tell express to use the json middleware
app.use(express.json());

// Allow everyone to access our API. In a real application, we would need to restrict this!
app.use(cors());

/****** Attach routes ******/
/**
 * We use /api/ at the start of every route!
 * As we also host our client code on heroku we want to separate the API endpoints.
 */
app.use("/api/user", userRouter);
app.use("/api/event", eventRouter);
app.use("/api/response", responseRouter);
export default app;
