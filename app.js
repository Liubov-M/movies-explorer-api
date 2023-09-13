const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const { errors } = require('celebrate');
const limiter = require('./middlewares/rateLimit');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
require('dotenv').config();

const { PORT, DB_URL } = require('./utils/config');

const app = express();

app.use(cors({ credentials: true, origin: true }));

app.use(helmet());

app.use(express.json());

mongoose.connect(DB_URL);

app.use(requestLogger);

app.use(limiter);

app.use('/', require('./routes/index'));

app.use(errorLogger);

app.use(errors());

app.use(errorHandler);

app.listen(PORT);
