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
async function createOne(req, res) {
  try {
    const { description } = req.body;
    const { alternatives } = req.body;
    const createdQuiz = await Quiz.create({
      description,
      alternatives
    });

    res.json(createdQuiz);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = { getAll, createOne };
