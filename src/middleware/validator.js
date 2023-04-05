'use strict';

function validaor(request, response, next){
  if(request.query.name){
    next();
  } else {
    next('Error at validator!');
  }
  
}

module.exports = validaor;
