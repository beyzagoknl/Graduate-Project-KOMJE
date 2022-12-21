import fs from "fs";
import ejs from "ejs";
import { getTransporter } from "../config/mail.js";
import { logError, logInfo } from "../util/logging.js";

export const sendMail = async ({ type, email, subject, text, payload }) => {
  try {
    const transporter = getTransporter();

    let template;
    switch (type) {
      case "VERIFY_ACCOUNT":
        template = accountVerificationTemplate(payload);
        break;
      case "UPDATE_PASSWORD":
        template = passwordUpdateTemplate(payload);
        break;
      case "CANCEL_EVENT":
        template = cancelEventTemplate(payload);
        break;
    }
    await transporter.sendMail({
      from: process.env.MAIL_USERNAME,
      to: email,
      subject,
      text,
      html: template,
    });
    logInfo("email sent successfully");
  } catch (error) {
    logError("email not sent!");
    logError(error);
    return error;
  }
};

const accountVerificationTemplate = ({ username, url }) => {
  const htmlTemplate = fs.readFileSync(
    "templates/accountVerificationTemplate.html",
    {
      encoding: "utf-8",
    }
  );

  return ejs.render(htmlTemplate, { username, url });
};

const passwordUpdateTemplate = ({ username, url }) => {
  const htmlTemplate = fs.readFileSync(
    "templates/updatePasswordTemplate.html",
    {
      encoding: "utf-8",
    }
  );

  return ejs.render(htmlTemplate, { username, url });
};

const cancelEventTemplate = ({ username, event }) => {
  const htmlTemplate = fs.readFileSync("templates/cancelEventTemplate.html", {
    encoding: "utf-8",
  });

  return ejs.render(htmlTemplate, { username, event });
};
