const mongoose = require('mongoose');
const validator = require('validator');

const authorSchema = new mongoose.Schema(
  {
    fullName: { type: String, maxLength: 25 },
    image: { type: String },
    email: {
      type: String,
      maxLength: 50,
      validate: value => {
        return validator.isEmail(value);
      },
    },
  },
  {
    _id: false,
  }
);

const blogsSchema = new mongoose.Schema(
  {
    author: { type: [authorSchema], default: [] },
    title: { type: String, default: '', required: true, unique: true },
    content: { type: String, default: '' },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

const blogsModel = mongoose.model('blogs', blogsSchema);

module.exports = blogsModel;
