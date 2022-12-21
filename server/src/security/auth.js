import crypto from "crypto";
import jsonwebtoken from "jsonwebtoken";
import { PRIV_KEY } from "./keys.js";

export const validatePassword = (password, hash, salt) => {
  var hashVerify = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return hash === hashVerify;
};

export const hashPassword = (password) => {
  var salt = crypto.randomBytes(32).toString("hex");
  var genHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

  return {
    salt: salt,
    hash: genHash,
  };
};

export const signJWT = (user) => {
  const payload = {
    sub: user._id,
    iss: "komje.com",
    iat: Date.now(),
    isVerified: user.isVerified,
    isActive: user.isActive,
    lastLoginDate: user.lastLoginDate,
    email: user.email,
    username: user.username,
  };

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    expiresIn: "1d",
    algorithm: "RS256",
  });

  return "Bearer " + signedToken;
};
