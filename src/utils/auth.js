<<<<<<< HEAD
const crypto = require("crypto");
const SALT = "sAruQ44A0jDbw0gr";

exports.encryptPassword = (password) => crypto.pbkdf2Sync(password, SALT, 1000, 64, `sha512`).toString(`hex`);
=======
import crypto from 'crypto';

const SALT = "sAruQ44A0jDbw0gr";

export function encryptPassword(password) {
  return crypto.pbkdf2Sync(password, SALT, 10000, 64, 'sha512').toString('hex');

}

>>>>>>> c0f4616 (pasando de js to ss)
