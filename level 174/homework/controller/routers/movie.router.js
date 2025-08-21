const express = require('express');
const { getAllMovies, newMovies, findMovie,deleteMovie,putMovie, patchMovie } = require("../controllers/movie.controller.js");

const moviesRouter = express.Router();

moviesRouter
    .route("/")
    .get(getAllMovies);

moviesRouter
    .route("/register")
    .post(newMovies);

moviesRouter
    .route("/:id")
    .get(findMovie)
    .delete(deleteMovie)
    .put(putMovie)
    .patch(patchMovie)

module.exports = { moviesRouter };
