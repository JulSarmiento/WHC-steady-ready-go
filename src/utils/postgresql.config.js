// Desc: PostgreSQL configuration

import { Sequelize } from "sequelize";
const POSTGRESQL_DATABASE = process.env.POSTGRESQL_DATABASE;
const POSTGRESQL_PASSWORD = process.env.POSTGRESQL_PASSWORD;
export default new Sequelize(
  `postgres://${POSTGRESQL_DATABASE}:${POSTGRESQL_PASSWORD}@balarama.db.elephantsql.com/${POSTGRESQL_DATABASE}`
);
