/* eslint-disable no-underscore-dangle */
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
async function getOne(req, res) {
  const { quizId } = req.params;
  try {
    const quiz = await Quiz.findById(quizId);
    res.send(quiz);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function updateOneQuiz(req, res) {
  try {
    const _id = req.params.id;
    const { description, alternatives } = req.body;
    let quiz = await Quiz.findOne({ _id });
    if (!quiz) {
      quiz = await Quiz.create({
        description,
        alternatives
      });
      return res.status(201).json(quiz);
    }
    quiz.description = description;
    quiz.alternatives = alternatives;
    await quiz.save();
    return res.status(200).json(quiz);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = {
  getAll,
  createOne,
  getOne,
  updateOneQuiz
};
