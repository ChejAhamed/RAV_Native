const Quiz = require('../models/quizModel');

async function getAll({ query }, res) {
  try {
    const quiz = await Quiz.find(query);
    res.json(quiz);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function createOne({ body }, res) {
  try {
    const createQuiz = await Quiz.create(body);
    res.json(createQuiz);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = { getAll, createOne };
