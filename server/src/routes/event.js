import express from "express";
import passport from "passport";
import {
  createEvent,
  getEventByShortLink,
  getEvents,
  cancelEvent,
} from "../controllers/event.js";
import { getEventResults } from "../controllers/results.js";
const eventRouter = express.Router();
eventRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createEvent
);
eventRouter.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getEvents
);
eventRouter.get(
  "/results/:eventId",
  passport.authenticate("jwt", { session: false }),
  getEventResults
);
eventRouter.get("/:shortLink", getEventByShortLink);
eventRouter.delete(
  "/:eventId",
  passport.authenticate("jwt", { session: false }),
  cancelEvent
);
eventRouter.delete(
  "/:eventId",
  passport.authenticate("jwt", { session: false }),
  cancelEvent
);
export default eventRouter;
