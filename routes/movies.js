const router = require('express').Router();
const { validateCreateMovie, validateDeleteMovie } = require('../utils/validationRules');

const {
  createMovie, getMovies, deleteMovie,
} = require('../controllers/movies');

router.get('/', getMovies);

router.post(
  '/',
  validateCreateMovie,
  createMovie,
);
router.delete(
  '/:movieId',
  validateDeleteMovie,
  deleteMovie,
);

module.exports = router;
