'use strict';

require('dotenv').config();
const server = require('./src/server');
const PORT = process.env.PORT;

const { sequelize } = require('./models/model');
//starting database, server and catching errors
sequelize.sync()
  .then(() => {
    server.start(PORT);
  })
  .catch(err => {
    console.log('SQL CONNECTION ERROR: ', err);
  });
