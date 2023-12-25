const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
  author: { type: [String], default: [] },
  title: { type: String, default: '', required: true, unique: true },
  content: { type: String, default: '' },
  publishedAt: { type: Date, default: null },
});

const blogsModel = mongoose.model('blogs', blogsSchema);

module.exports = blogsModel;
