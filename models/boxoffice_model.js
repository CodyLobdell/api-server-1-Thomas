'use strict';

const  { sequelize, DataTypes } = require('./model');
// const { DataTypes } = require('sequelize');

// defines box office table
const boxoffice_model = sequelize.define('Boxoffice', {
  // each of these is a column in the table
  boxoffice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ticket: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

});
//exporting database and model
module.exports = {
  sequelize,
  boxoffice_model,
};