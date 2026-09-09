const Blog = require('../models/blogModel');

// GET /blogs

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'failed to retrieve' });
  }
};

const createBlog = async (req, res) => {
  try {
    const newBlogs = await Blog.create({ ...req.body });
    res.status(201).json(newBlogs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create' });
  }
};

const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json(error, { message: 'failed..' });
  }
};

const updateBlog = async (req, res) => {
  const { id } = req.params;
  const updatedData = { ...req.body };
  try {
    const updatedBlog = await Blog.findOneAndUpdate({ _id: id }, updatedData, {
      new: true,
    });
    if (updatedBlog) {
      res.status(200).json(updatedBlog, { message: 'Updated Successfully' });
    }
  } catch (error) {
    res.status(404).json({ message: 'unsuccessful' });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findOneAndDelete({ _id: id });
    if (blog) {
      res.status(200).json(blog, { message: 'Blog deleted successfully' });
    }
  } catch (error) {
    res.status(500).json(error, { message: 'failed' });
  }
};
// Similarly, implement createBlog, getBlogById, deleteBlog

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
};
