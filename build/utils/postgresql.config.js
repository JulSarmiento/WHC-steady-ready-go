"use strict";
// Desc: PostgreSQL configuration
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const POSTGRESQL_DATABASE = process.env.POSTGRESQL_DATABASE;
const POSTGRESQL_PASSWORD = process.env.POSTGRESQL_PASSWORD;
exports.default = new sequelize_1.Sequelize(`postgres://${POSTGRESQL_DATABASE}:${POSTGRESQL_PASSWORD}@balarama.db.elephantsql.com/${POSTGRESQL_DATABASE}`);
