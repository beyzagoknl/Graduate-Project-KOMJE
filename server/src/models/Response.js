import mongoose, { Schema } from "mongoose";

const responseSchema = new mongoose.Schema({
  eventId: {
    type: String,
    required: true,
  },
  guestName: {
    type: String,
    required: true,
  },
  guestEmail: {
    type: String,
    required: true,
  },
  responses: [
    {
      question: { type: String, required: true },
      answer: { type: Schema.Types.Mixed, required: true },
    },
  ],
});
const Response = mongoose.model("responses", responseSchema);
export default Response;
