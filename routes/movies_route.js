'use strict';

const express = require('express');
const router = express.Router();
const { movies_model } = require('../models/movies_model');
// applying CRUD and functions for route
router.get('/', getMovies);
router.get('/:id', getAMovie);
router.post('/', postAMovie);
router.put('/:id', putAMovie);
router.delete('/:id', deleteAMovie);

// const data = [];

//all funcitons for movie. confirming status
async function getMovies(request, response, next) {
  let movies = await movies_model.findAll();
  response.status(200).json(movies);
}

async function getAMovie(request, response, next) {
  let id = request.params.id;
  let aMovie = await movies_model.findByPk(id);
  response.status(200).json(aMovie);
}

async function postAMovie(request, response, next) {
  const movie = await movies_model.create(request.body);
  response.status(200).json(movie);
}

async function putAMovie(request, response, next) {
  let id = request.params.id;
  const movie = {
    title: request.body.title,
    year: request.body.year,
    runtime: request.body.runtime,
    id: id,
  };
  // await movies_model.findByPk(id);
  await movies_model.update(request.body,{
    where: {id: id}
  });
  response.status(200).json(movie);
}

async function deleteAMovie(request, response, next) {
  let id = request.params.id;
  const movie = await movies_model.destroy({
    where: {
      id: id,
    }
  });
  response.status(200).send(movies_model.findByPk(id));

}

module.exports = router;