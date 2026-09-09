const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userControllers');

// GET /cars
router.get('/', getAllUsers);

// POST /cars
router.post('/', createUser);

// GET /cars/:carId
router.get('/:id', getUserById);

// PUT /cars/:carId
router.put('/:id', updateUser);

// DELETE /cars/:carId
router.delete('/:id', deleteUser);

module.exports = router;
