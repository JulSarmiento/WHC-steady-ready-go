// Desc: PostgreSQL configuration
const {Sequelize} = require('sequelize');
module.exports = new Sequelize(process.env.POSTGRESQL_URL);