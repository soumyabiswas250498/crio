const { getQueryErrors } = require('../validators/users.validators');

const validateUserSearch = (req, res, next) => {
  const { gender, age } = req.query;
  const error = getQueryErrors({
    age,
    gender,
  });
  if (error) {
    console.log(error);
    return res.status(422).json({ message: 'Invalid Data' });
  }
  next();
};

module.exports = {
  validateUserSearch,
};
