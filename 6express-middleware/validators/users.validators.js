const Joi = require('joi');

const schema = Joi.object()
  .keys({
    age: Joi.number().integer().min(0).max(120),
    gender: Joi.string().valid('male', 'female'),
  })
  .or('age', 'gender');

getQueryErrors = data => {
  const result = schema.validate(data);
  return result.error;
};

module.exports = {
  getQueryErrors,
};
