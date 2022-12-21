import Event from "../models/Event.js";
import Response from "../models/Response.js";
import {
  getGuestsInformation,
  numberOfNotAttending,
  numberOfAttending,
  getAllTotalAnswers,
  countPercentage,
  getAllTotalAnswersPercentages,
  getSubject,
  getChartsArrays,
} from "../util/resultsFunctions.js";
export const getEventResults = async (req, res) => {
  const eventId = req.params.eventId;
  try {
    const targetEvent = await Event.findById(eventId);
    if (targetEvent.creatorId !== req.user._id.toString()) {
      res.status(400).json({ success: false });
      return;
    }

    const keys = targetEvent.form.map((question) => question.key);
    const labels = targetEvent.form.map((question) => question.label);

    const answers = await Response.find({ eventId });

    if (answers.length > 0) {
      const totalResponse = answers.length;
      const attending = numberOfAttending(answers);
      const result = {
        totalResponse,
        attending,
        notAttending: numberOfNotAttending(answers),
        attendingPercentage: countPercentage(totalResponse, attending),
        guestsInformation: getGuestsInformation(answers),
        allTotalAnswers: getAllTotalAnswers(answers, keys, labels),
        allTotalAnswersPercentage: getAllTotalAnswersPercentages(answers, keys),
        subjectArray: getSubject(answers, keys, labels),
        chartArray: getChartsArrays(answers, keys, labels),
      };
      res.status(200).json({
        success: true,
        result,
      });
    } else {
      res.status(204).json({
        success: true,
        result:
          "Sorry! .... It seems that no one has answered your invitation yet ..",
      });
    }
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
