const mongoose = require('mongoose');
const URL_REGEX = require('../utils/constants');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Поле обязательно к заполнению'],
  },
  director: {
    type: String,
    required: [true, 'Поле обязательно к заполнению'],
  },
  duration: {
    type: Number,
    required: [true, 'Поле обязательно к заполнению'],
  },
  year: {
    type: String,
    required: [true, 'Поле обязательно к заполнению'],
  },
  description: {
    type: String,
    required: [true, 'Поле обязательно к заполнению'],
  },
  image: {
    type: String,
    required: [true, 'Поле обязательно к заполнению'],
    validate: {
      validator(url) {
        return URL_REGEX.test(url);
      },
      message: 'Введите URL',
    },
  },
  trailerLink: {
    type: String,
    required: [true, 'Поле обязательно к заполнению'],
    validate: {
      validator(url) {
        return URL_REGEX.test(url);
      },
      message: 'Введите URL',
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'Поле обязательно к заполнению'],
    validate: {
      validator(url) {
        return URL_REGEX.test(url);
      },
      message: 'Введите URL',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Поле обязательно к заполнению'],
  },
  movieId: {
    type: Number,
    required: [true, 'Поле обязательно к заполнению'],
  },
  nameRU: {
    type: String,
    required: [true, 'Поле обязательно к заполнению'],
  },
  nameEN: {
    type: String,
    required: [true, 'Поле обязательно к заполнению'],
  },
}, { versionKey: false });

module.exports = mongoose.model('movie', movieSchema);
