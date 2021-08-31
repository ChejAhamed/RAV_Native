const { Router } = require('express');
const quizController = require('../controllers/quizController');

const quizRouter = new Router();
quizRouter
  .route('/')
  .post(quizController.createOne)
  .get(quizController.getAll);

module.exports = quizRouter;
