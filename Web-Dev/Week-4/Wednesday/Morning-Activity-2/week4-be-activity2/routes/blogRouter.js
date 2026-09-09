const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogControllers');
const validate = require('../middleware/validateMongo');

// GET /cars
router.get('/', getAllBlogs);

// POST /cars
router.post('/', createBlog);

// GET /cars/:carId
router.get('/:id', validate, getBlogById);

// PUT /cars/:carId
router.put('/:id', validate, updateBlog);

// DELETE /cars/:carId
router.delete('/:id', validate, deleteBlog);

module.exports = router;
