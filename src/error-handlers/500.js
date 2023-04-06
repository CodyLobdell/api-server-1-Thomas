'use strict';
//handling error 500
function error500(error, request, response, next){
  response.status(500).send('500/Server Error');
  next();
}

module.exports = error500;