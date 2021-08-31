const { Router } = require('express');
const quizController = require('../controllers/quizController');

const quizRouter = new Router();
quizRouter
  .route('/')
  .post(quizController.createOne)
  .get(quizController.getAll);
quizRouter
  .route('/:quizId')
  .get(quizController.getOne)
  .put(quizController.updateOneQuiz)
  .delete(quizController.deleteOneQuiz);

module.exports = quizRouter;
