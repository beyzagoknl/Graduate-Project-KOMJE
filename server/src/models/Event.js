import mongoose from "mongoose";

import validateAllowedFields from "../util/validateAllowedFields.js";
import validateRequiredFields from "../util/validateRequiredFields.js";

const templateDetailsSchema = new mongoose.Schema({
  eventTitle: { type: String },
  brideName: { type: String, required: true },
  groomName: { type: String, required: true },
  date: { type: Date, required: true },
  address: { type: String, required: true },
  description: { type: String },
  contactNumber: { type: String },
  contactName: { type: String },
  images: { type: Array },
});

const attributesSchema = new mongoose.Schema({
  type: { type: String, required: true },
  required: { type: Boolean },
  max: { type: Number },
  min: { type: Number },
  after: { type: String },
  before: { type: String },
});

const optionSchema = new mongoose.Schema({
  key: { type: String, required: true },
  value: { type: String, required: true },
});

const eventSchema = new mongoose.Schema({
  status: { type: String, default: "ACTIVE" },
  creatorId: { type: String, required: true },
  creatorName: { type: String, required: true },
  creatorEmail: { type: String, required: true },
  isPrivate: { type: Boolean, default: false },
  type: { type: String, default: "WEDDING" },
  template: { type: String, default: "DEFAULT" },
  templateDetails: { type: templateDetailsSchema, required: true },
  form: [
    {
      key: { type: String, required: true },
      label: { type: String, required: true },
      attributes: { type: attributesSchema, required: false },
      options: [{ type: optionSchema }],
    },
  ],
  shortLink: { type: String, required: true, unique: true },
});

const Event = mongoose.model("events", eventSchema);

export default Event;

export const validateEvent = (eventObject) => {
  const errorList = [];
  const defaultFields = [
    "creatorId",
    "creatorName",
    "creatorEmail",
    "shortLink",
  ];
  const requiredKeys = ["templateDetails", "form"];
  const optionalKeys = ["isPrivate", "type", "template"];

  const validatedKeysMessage = [];
  validatedKeysMessage.push(
    validateAllowedFields(eventObject, [
      ...defaultFields,
      ...requiredKeys,
      ...optionalKeys,
    ])
  );
  validatedKeysMessage.push(validateRequiredFields(eventObject, requiredKeys));

  const templateDetailsRequiredKeys = [
    "brideName",
    "groomName",
    "date",
    "address",
  ];
  const templateDetailsAllowedKeys = [
    "eventTitle",
    "description",
    "contactNumber",
    "contactName",
    "images",
  ];

  validatedKeysMessage.push(
    validateAllowedFields(eventObject.templateDetails, [
      ...templateDetailsAllowedKeys,
      ...templateDetailsRequiredKeys,
    ])
  );

  validatedKeysMessage.push(
    validateRequiredFields(
      eventObject.templateDetails,
      templateDetailsRequiredKeys
    )
  );

  const formRequiredKeys = ["key", "label", "attributes"];
  const formAllowedKeys = ["options"];

  eventObject.form.map((form) => {
    validatedKeysMessage.push(
      validateAllowedFields(form, [...formAllowedKeys, ...formRequiredKeys])
    );
    validatedKeysMessage.push(validateRequiredFields(form, formRequiredKeys));
  });

  const messages = validatedKeysMessage.filter((msg) => !!msg);
  if (messages.length > 0) {
    errorList.push(messages);
  }

  return errorList;
};
