'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

// here is our connection
const SQL_URL = process.env.SQL_URL || 'sqlite:memory:';

// provide your connection string
const sequelize = new Sequelize(SQL_URL);

module.exports = { sequelize, DataTypes };