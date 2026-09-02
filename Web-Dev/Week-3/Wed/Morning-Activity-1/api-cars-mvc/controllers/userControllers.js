const User = require("../models/userModel");


// GET /users
const getAllUsers = (req, res) => {
  const users = User.getAll();
  res.status(200).json(users);
};

// POST /users
const createUser = (req, res) => {
  const { name, password, username, address, age}=req.body
  const newUser = User.addOne({ name, password, username, address, age });
  res.status(201).json(newUser);
};

// GET /users/:userId
const getUserById = (req, res) => {
  const id=req.params.userId;
  const user=User.findById(id)
  if (user){
    return res.status(200).json(user)
  }

  res.json({ message: "Not a valid id" });
};

// PUT /users/:userId
const updateUser = (req, res) => {
  const id=req.params.userId
  const updatedData=req.body
  const userUpdate=User.updateOneById(id,updatedData)
  if(userUpdate){
    return res.status(201).json({message:"Successfully updated"})
  }
  res.json({message:" Update Failed"})
};


// DELETE /users/:userId
const deleteUser = (req, res) => {
  const id=req.params.userId;
  const userDelete=User.deleteOneById(id)
  if(userDelete){
    res.json({message:"deleted successfully"})
  }
  res.json({ message: "deletion failed" });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
