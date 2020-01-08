const express = require('express');
const MoviesService = require('../services/movies');

//schemas de validacion
const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
} = require('../utils/schemas/movies');

//validador de schemas
const validationHandler = require('../utils/middleware/validationHandler');

//cache
const cacheResponse = require('../utils/cacheResponse');
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS
} = require('../utils/time');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  /**
   * Endpoint to get all movies
   */
  router.get('/', async (req, res, next) => {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
    const { tags } = req.query;
    try {
      const movies = await moviesService.getMovies({ tags });

      res.status(200).json({
        data: movies,
        message: 'Movies listed'
      });
    } catch (err) {
      next(err);
    }
  });

  /**
   * Endpoint to get a specific movie
   */
  router.get(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async (req, res, next) => {
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
      const { movieId } = req.params;
      try {
        const movie = await moviesService.getMovie({ movieId });

        res.status(200).json({
          data: movie,
          message: 'Movie retrived'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  /**
   * Endpoint to create a movie
   */
  router.post(
    '/',
    validationHandler(createMovieSchema),
    async (req, res, next) => {
      const { body: movie } = req;
      try {
        const createMovieId = await moviesService.createMovie({ movie });
        res.status(201).json({
          data: createMovieId,
          message: 'Movie created'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  /**
   * Endpoint to replace a specific movie
   */
  router.put(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    async (req, res, next) => {
      const { movieId } = req.params;
      const { body: movie } = req;
      try {
        const updatedMovieId = await moviesService.replaceMovie({
          movie,
          movieId
        });
        res.status(200).json({
          data: updatedMovieId,
          message: 'Movie replaced'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  /**
   * Endpoint to delete a specific movie
   */
  router.delete(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async (req, res, next) => {
      const { movieId } = req.params;
      try {
        const deletedMovieId = await moviesService.deleteMovie({ movieId });
        res.status(200).json({
          data: deletedMovieId,
          message: 'Movie deleted'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  /**
   * Endpoint to update a specific movie
   */
  router.patch('/:movieId', async (req, res, next) => {
    const { movieId } = req.params;
    const { body: movie } = req;
    try {
      const updatedMovieId = await moviesService.updateMovie({
        movie,
        movieId
      });
      res.status(200).json({
        data: updatedMovieId,
        message: 'Movie updated'
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = moviesApi;
