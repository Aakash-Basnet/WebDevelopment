const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userControllers');

const validate = require('../middleware/validateMongo');

// GET /cars
router.get('/', getAllUsers);

// POST /cars
router.post('/', createUser);

// GET /cars/:carId
router.get('/:id', validate, getUserById);

// PUT /cars/:carId
router.put('/:id', validate, updateUser);

// DELETE /cars/:carId
router.delete('/:id', validate, deleteUser);

module.exports = router;
