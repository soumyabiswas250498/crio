const router = require('express').Router();
const {
  createNewBlog,
  getAllBlogs,
  deleteBlogWithID,
  updateBlogsWithId,
} = require('../controllers/blogs.controller');

router.get('/', getAllBlogs);
router.post('/new', createNewBlog);
router.delete('/:id', deleteBlogWithID);
router.patch('/:id', updateBlogsWithId);

module.exports = router;
