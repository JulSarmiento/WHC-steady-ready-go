import crypto from "crypto";
const SALT = "sAruQ44A0jDbw0gr";

export const encryptPassword = (password: string): string => {
  return crypto.pbkdf2Sync(password, SALT, 1000, 64, `sha512`).toString(`hex`);
};