const router = require('express').Router();
const { login, createUser } = require('../controllers/users');
const { auth } = require('../middlewares/auth');
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const NotFoundError = require('../errors/NotFoundError');
const { validateLogin, validateCreateUser } = require('../utils/validationRules');
const { NOT_FOUND } = require('../utils/constants');

router.post(
  '/signin',
  validateLogin,
  login,
);
router.post(
  '/signup',
  validateCreateUser,
  createUser,
);
router.use(auth);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use('*', (req, res, next) => {
  next(new NotFoundError(NOT_FOUND));
});

module.exports = router;
