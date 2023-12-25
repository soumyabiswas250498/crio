const Blogs = require('../models/blogs.models');

const findBlogs = async id => {
  try {
    if (id) {
      const blog = await Blogs.find({ _id: id });
      return blog;
    } else {
      const blogs = await Blogs.find({});
      return blogs;
    }
  } catch (e) {
    console.log(e);
  }
};

const createNewBlogService = async data => {
  const newBlog = new Blogs(data);
  console.log(newBlog);
  try {
    const result = await newBlog.save();
    return result;
  } catch (e) {
    console.log(e);
  }
};

const deleteBlogWithIDService = async id => {
  try {
    console.log(id);
    const result = await Blogs.findOneAndDelete({ _id: id });
    return result;
    // res.json(result);
  } catch (e) {
    console.log(e);
    // res.status(500).json({ message: 'Could not delete. Please Try again' });
  }
};

const updateBlogsWithIdService = async arr => {
  try {
    const response = await Blogs.findOneAndUpdate(...arr);
    // console.log(response);
    return response;
    // res.status(200).json(response);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  findBlogs,
  createNewBlogService,
  deleteBlogWithIDService,
  updateBlogsWithIdService,
};
