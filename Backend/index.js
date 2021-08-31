require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('quizApi');
const chalk = require('chalk');
const cors = require('cors');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5001;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
const quizRouter = require('./src/routes/quizRoutes');

server.use('/api/quiz', quizRouter);
server.listen(
  port,
  () => debug(`Server is running on ${chalk.bgYellow(`http://localhost:${port}`)}`)
);
