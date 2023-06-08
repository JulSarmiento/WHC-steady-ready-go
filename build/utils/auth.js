"use strict";
const crypto = require("crypto");
const SALT = "sAruQ44A0jDbw0gr";
exports.encryptPassword = (password) => crypto.pbkdf2Sync(password, SALT, 1000, 64, `sha512`).toString(`hex`);
