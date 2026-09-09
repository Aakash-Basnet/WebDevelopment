const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogControllers');

// GET /cars
router.get('/', getAllBlogs);

// POST /cars
router.post('/', createBlog);

// GET /cars/:carId
router.get('/:id', getBlogById);

// PUT /cars/:carId
router.put('/:id', updateBlog);

// DELETE /cars/:carId
router.delete('/:id', deleteBlog);

module.exports = router;
