import Event, { validateEvent } from "../models/Event.js";
import validationErrorMessage from "../util/validationErrorMessage.js";
import { nanoid } from "nanoid";
import { logError } from "../util/logging.js";
import Response from "../models/Response.js";
import { sendMail } from "../services/mailService.js";
export const createEvent = async (req, res) => {
  const errorList = validateEvent(req.body);
  if (errorList.length > 0) {
    res
      .status(400)
      .json({ success: false, msg: validationErrorMessage(errorList) });
    return;
  }
  const newEvent = new Event({
    creatorId: req.user._id,
    creatorName: req.user.username,
    creatorEmail: req.user.email,
    isPrivate: req.body.isPrivate || false,
    type: req.body.type || "WEDDING",
    template: req.body.template || "DEFAULT",
    templateDetails: req.body.templateDetails,
    form: req.body.form,
    shortLink: nanoid(process.env.SHORT_LINK_LENGTH || 7),
  });
  const event = await newEvent.save();
  res.status(200).json({
    success: true,
    event: event,
    msg: "Event successfully created!",
  });
};
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find({
      creatorId: req.user._id,
      status: "ACTIVE",
    });
    if (!events) res.json({ message: "There is no events yet" });
    res.status(200).json({
      success: true,
      events: events,
    });
  } catch (err) {
    logError(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
export const getEventByShortLink = async (req, res) => {
  try {
    const events = await Event.findOne({
      shortLink: req.params.shortLink,
      status: "ACTIVE",
    });
    if (!events)
      res.json({
        message:
          "There is not any events with this shortLink or event expired.",
      });
    res.status(200).json({
      success: true,
      event: events,
    });
  } catch (err) {
    logError(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
export const cancelEvent = async (req, res) => {
  try {
    const event = await Event.findOne({ _id: req.params.eventId });
    if (event.creatorId !== req.user._id.valueOf()) {
      res.status(401).send({
        success: false,
        message: "You do not have permission to perform this operation",
      });
      return;
    }
    const response = await Event.findOneAndUpdate(
      { _id: req.params.eventId },
      { status: "DELETED" },
      { new: true }
    );
    sendCancelMail(req.params.eventId, event.type).then();
    res.status(200).json({
      success: true,
      event: response,
    });
  } catch (err) {
    logError(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
const sendCancelMail = async (eventId, eventType) => {
  const answers = await Response.find({ eventId });
  const mailList = answers
    .filter((ans) =>
      ans.responses.find((a) => a.question === "response" && a.answer === "yes")
    )
    .map((ans) => {
      return { mail: ans.guestEmail, username: ans.guestName };
    });
  let event = "wedding";
  switch (eventType) {
    case "WEDDING":
      event = "wedding";
      break;
  }
  for (const contact of mailList) {
    await sendMail({
      type: "CANCEL_EVENT",
      subject: "Event Cancellation",
      text: `Sorry, we regrettably inform you that the ${event} that you are prepared to go to, was canceled by its organizer.`,
      email: contact.mail,
      payload: { username: contact.username, event },
    });
  }
};
