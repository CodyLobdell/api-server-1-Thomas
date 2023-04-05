'use strict';

const  {sequelize, DataTypes} = require('./model');


// defines a table
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

module.exports = {
  sequelize,
  boxoffice_model,
};