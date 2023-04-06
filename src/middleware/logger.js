'use strict';
//check to see if anything is passing through
function logger(request, response, next) {
  console.log('logger works');
  next();
}

module.exports = logger;