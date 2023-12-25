const {
  findBlogs,
  createNewBlogService,
  deleteBlogWithIDService,
  updateBlogsWithIdService,
} = require('../services/blogs.services');

const createNewBlog = async (req, res) => {
  console.log(req.body);
  try {
    const result = await createNewBlogService(req.body);
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json(e);
  }
};

const getAllBlogs = async (req, res) => {
  console.log(req);
  const { id } = req.query;
  try {
    const blogs = await findBlogs(id);
    res.status(200).json(blogs);
  } catch (e) {
    console.log(e);
  }
};

const deleteBlogWithID = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteBlogWithIDService(id);
    res.json(result);
  } catch {
    res.status(500).json({ message: 'Could not delete. Please Try again' });
  }
};

const updateBlogsWithId = async (req, res) => {
  try {
    const response = await updateBlogsWithIdService([
      { _id: req.params.id },
      req.body,
      { new: true },
    ]);
    res.status(200).json(response);
  } catch (e) {
    res.status(500).json({ message: 'Could not update. Please Try again' });
  }
};

module.exports = {
  createNewBlog,
  getAllBlogs,
  deleteBlogWithID,
  updateBlogsWithId,
};
