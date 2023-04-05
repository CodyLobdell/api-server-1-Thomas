'use strict';

const express = require('express');
const router = express.Router();
const { boxoffice_model } = require('../models/boxoffice_model');

router.get('/', getboxoffice);
router.get('/:id', getAboxoffice);
router.post('/', postAboxoffice);
router.put('/:id', putAboxoffice);
router.delete('/:id', deleteAboxoffice);

async function getboxoffice(request, response, next) {
  let boxoffice = await boxoffice_model.findAll();
  response.status(200).json(boxoffice);
}

async function getAboxoffice(request, response, next) {
  let id = request.params.id;
  let aboxoffice = await boxoffice_model.findByPk(id);
  response.status(200).json(aboxoffice);
}

async function postAboxoffice(request, response, next) {
  const boxoffice = await boxoffice_model.create(request.body);
  response.status(200).json(boxoffice);
}

async function putAboxoffice(request, response, next) {
  let id = request.params.id;
  const boxoffice = {
    boxoffice: request.body.boxoffice,
    ticket: request.body.ticket,
    id: id,
  };
  // await boxoffice_model.findByPk(id);
  await boxoffice_model.update(request.body,{
    where: {id: id}
  });
  response.status(200).json(boxoffice);
}

async function deleteAboxoffice(request, response, next) {
  let id = request.params.id;
  const boxoffice = await boxoffice_model.destroy({
    where: {
      id: id,
    }
  });
  response.status(200).send(boxoffice_model.findByPk(id));

}


module.exports = router;