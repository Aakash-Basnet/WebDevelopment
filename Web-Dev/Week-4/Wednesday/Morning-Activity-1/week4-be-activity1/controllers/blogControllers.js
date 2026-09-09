const Blog = require('../models/blogModel');

// GET /blogs
const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort({ createdAt: -1 });
  res.status(200).json(blogs);
};

const createBlog = async (req, res) => {
  const newBlogs = await Blog.create({ ...req.body });
  res.status(201).json(newBlogs);
};

const getBlogById = async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  if (blog) {
    res.status(200).json(blog);
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
};

const updateBlog = async (req, res) => {
  const { id } = req.params;
  const updatedData = { ...req.body };
  const updatedBlog = await Blog.findOneAndUpdate({ _id: id }, updatedData, {
    new: true,
  });
  if (updatedBlog) {
    res.status(200).json(updatedBlog, { message: 'Updated Successfully' });
  } else {
    res.status(404).json({ message: 'unsuccessful' });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findOneAndDelete({ _id: id });
  if (blog) {
    res.status(200).json(blog, { message: 'Blog deleted successfully' });
  } else {
    res.status(400).json({ message: 'Sorry, operation unsuccessful' });
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
