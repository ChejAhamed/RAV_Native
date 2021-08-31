const User = require('../models/userModel');

async function getAll({ query }, res) {
  try {
    const users = await User.find(query);
    res.json(users);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function createOne({ body }, res) {
  try {
    const createdUser = await User.create(body);
    res.json(createdUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function getOneById(req, res) {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    res.send(user);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function updateOneUser(req, res) {
  const dataToUpate = req.body;
  const { userId } = req.params;
  try {
    const userUpated = await User.findByIdAndUpdate(
      userId,
      dataToUpate,
      {
        new: true,
        useFindAndModify: false
      }
    );
    res.json(userUpated);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function deleteOneUser(req, res) {
  const { userId } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    res.json(deletedUser);
    res.status(204);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAll,
  createOne,
  getOneById,
  updateOneUser,
  deleteOneUser
};
