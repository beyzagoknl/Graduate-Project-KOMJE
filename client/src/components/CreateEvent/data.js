Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const handleDatePicker = (day) => {
  return new Date().addDays(day).toISOString().slice(0, 16);
};

export const detailsFormInputs = [
  {
    id: 1,
    name: "eventTitle",
    type: "text",
    placeholder: "We are getting married",
    errorMessage: "Wedding title should be between 5 and 50 characters long.",
    label: "Wedding Title",
    pattern: "^.{5,50}$",
    required: true,
    className: "form-input",
  },
  {
    id: 2,
    name: "brideName",
    type: "text",
    placeholder: "Camelia",
    errorMessage:
      "First Partner's name should be between 1 and 30 characters long.",
    label: "First Partner's Name",
    pattern: "^.{1,30}$",
    required: true,
    className: "form-input",
  },
  {
    id: 3,
    name: "groomName",
    type: "text",
    placeholder: "Oliver",
    errorMessage:
      "First Partner's name should be between 1 and 30 characters long.",
    label: "Second Partner's name",
    pattern: "^.{1,30}$",
    required: true,
    className: "form-input",
  },
  {
    id: 4,
    name: "date",
    min: handleDatePicker(1),
    max: handleDatePicker(180),
    type: "datetime-local",
    placeholder: "14/02/2023 18:00",
    label: "Date and Time of Wedding",
    errorMessage: "Date and time should be entered.",
    required: true,
    className: "form-input",
  },
  {
    id: 5,
    name: "address",
    type: "text",
    placeholder: "Vondelkerk, Vondelstraat 120, Amsterdam",
    errorMessage: "Address should be entered.",
    label: "Address",
    required: true,
    className: "form-input",
  },
  {
    id: 6,
    name: "contactName",
    type: "text",
    placeholder: "Robert",
    errorMessage: "Please enter contact name .",
    label: "Contact Name",
    required: true,
    pattern: "^.{3,30}$",
    className: "form-input",
  },
  {
    id: 7,
    name: "contactNumber",
    type: "tel",
    placeholder: "+31 6 12345678",
    label: "Contact Phone Number",
    errorMessage: "Please enter contact phone number",
    pattern: "^[0-9]*$",
    required: true,
    className: "form-input",
  },
];

export const defaultQuestions = [
  {
    key: "question_1",
    label: "Please enter your full name?",
    attributes: {
      type: "text",
      required: true,
    },
  },
  {
    key: "question_2",
    label: "Enter your email?",
    attributes: {
      type: "email",
      required: true,
    },
  },
  {
    key: "question_3",
    label: "Are you going to join us?",
    attributes: {
      type: "singleChoice",
      required: true,
    },
    options: [
      {
        key: "option_1",
        value: "yes",
      },
      {
        key: "option_2",
        value: "no",
      },
    ],
  },
];
