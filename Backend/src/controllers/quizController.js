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
async function createOne({ description, alternatives }, res) {
  try {
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
  const _id = req.params.id;
  const { description, alternatives } = req.body;
  try {
    const userUpdated = await Quiz.findByIdAndUpdate(
      _id,
      { description, alternatives },
      {
        new: true,
        useFindAndModify: false
      }

    );
    res.json(userUpdated);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function deleteOneQuiz(req, res) {
  const { quizId } = req.params;
  try {
    const deleteQuiz = await Quiz.findByIdAndDelete(quizId);
    res.json(deleteQuiz);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAll,
  createOne,
  getOne,
  updateOneQuiz,
  deleteOneQuiz
};
