import mongoose from "mongoose";

import validateAllowedFields from "../util/validateAllowedFields.js";
import validateRequiredFields from "../util/validateRequiredFields.js";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  isVerified: { type: Boolean, default: false },
  lastLoginDate: { type: Date, default: new Date() },
});

const User = mongoose.model("users", userSchema);

export const validateRegisterUser = (userObject) => {
  const errorList = [];
  const requiredKeys = ["username", "email", "password"];
  const optionalKeys = [];

  const validatedKeysMessage = [];
  validatedKeysMessage.push(
    validateAllowedFields(userObject, [...requiredKeys, ...optionalKeys])
  );
  validatedKeysMessage.push(validateRequiredFields(userObject, requiredKeys));

  validatedKeysMessage.push(validateUsername(userObject.username));
  validatedKeysMessage.push(validateEmail(userObject.email));
  validatedKeysMessage.push(validatePassword(userObject.password));

  const messages = validatedKeysMessage.filter((msg) => !!msg);
  if (messages.length > 0) {
    errorList.push(messages);
  }

  return errorList;
};

export const validateLoginUser = (userObject) => {
  const errorList = [];
  const requiredKeys = ["email", "password"];
  const optionalKeys = [];

  const validatedKeysMessage = [];
  validatedKeysMessage.push(
    validateAllowedFields(userObject, [...requiredKeys, ...optionalKeys])
  );
  validatedKeysMessage.push(validateRequiredFields(userObject, requiredKeys));

  validatedKeysMessage.push(validateEmail(userObject.email));
  validatedKeysMessage.push(validatePassword(userObject.password));

  const messages = validatedKeysMessage.filter((msg) => !!msg);
  if (messages.length > 0) {
    errorList.push(messages);
  }

  return errorList;
};

const validateUsername = (username) => {
  const regex = new RegExp(/^[A-Za-z0-9]{3,16}$/);
  if (!regex.test(username)) {
    return "Username is invalid";
  }
};

const validateEmail = (email) => {
  const regex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if (!regex.test(email)) {
    return "Email is invalid";
  }
};

const validatePassword = (password) => {
  const regex = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,20}$/
  );
  if (!regex.test(password)) {
    return "Password must be 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character(#?!@$%^&*-)";
  }
};

export default User;
