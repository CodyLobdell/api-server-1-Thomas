'use strict';


const  {sequelize, DataTypes} = require('./model');

// require('dotenv').config();
// const { Sequelize, DataTypes } = require('sequelize');
// here is our connection
// const SQL_URL = process.env.SQL_URL || 'sqlite:memory:';
// provide your connection string
// const sequelize = new Sequelize(SQL_URL);

// defines a table
const movies_model = sequelize.define('Movies', {
  // each of these is a column in the table
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  runtime: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = {
  sequelize,
  movies_model,
};