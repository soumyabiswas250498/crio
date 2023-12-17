const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
  author: [String],
  title: String,
  content: String,
  publishedAt: Date,
});

const blogsModel = mongoose.model('blogs', blogsSchema);

module.exports = blogsModel;
