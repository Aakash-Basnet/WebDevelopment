const User = require('../models/UserModel');

// GET /Users
const getAllUsers = async (req, res) => {
  const Users = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(Users);
};

const createUser = async (req, res) => {
  const newUsers = await User.create({ ...req.body });
  res.status(201).json(newUsers);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const User = await User.findById(id);
  if (User) {
    res.status(200).json(User);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedData = { ...req.body };
  const updatedUser = await User.findOneAndUpdate({ _id: id }, updatedData, {
    new: true,
  });
  if (updatedUser) {
    res.status(200).json(updatedUser, { message: 'Updated Successfully' });
  } else {
    res.status(404).json({ message: 'unsuccessful' });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOneAndDelete({ _id: id });
  if (user) {
    res.status(200).json(user, { message: 'User deleted successfully' });
  } else {
    res.status(400).json({ message: 'Sorry, operation unsuccessful' });
  }
};
// Similarly, implement createUser, getUserById, deleteUser

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
