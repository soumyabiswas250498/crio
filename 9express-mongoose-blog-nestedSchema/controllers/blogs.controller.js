const Blogs = require('../models/blogs.models');

const createNewBlog = async (req, res) => {
  console.log(req.body);
  const newBlog = new Blogs(req.body);
  console.log(newBlog);
  try {
    const result = await newBlog.save();
    res.status(200).json(result);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
};

const getAllBlogs = async (req, res) => {
  console.log(req);
  const { id } = req.query;
  try {
    if (id) {
      const blogs = await Blogs.find({ _id: id });
      res.status(200).json(blogs);
    } else {
      const blogs = await Blogs.find({});
      res.status(200).json(blogs);
    }
    console.log(id);
  } catch (e) {
    console.log(e);
  }
};

const deleteBlogWithID = async (req, res) => {
  const { id } = req.params;
  try {
    console.log(id);
    const result = await Blogs.findOneAndDelete({ _id: id });
    res.json(result);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Could not delete. Please Try again' });
  }
};

const updateBlogsWithId = async (req, res) => {
  try {
    const response = await Blogs.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).json(response);
  } catch (e) {}
};

module.exports = {
  createNewBlog,
  getAllBlogs,
  deleteBlogWithID,
  updateBlogsWithId,
};
