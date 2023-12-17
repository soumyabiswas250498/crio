const users = require('../users.json');
const { getQueryErrors } = require('../validators/users.validators');

const getAllUsers = (req, res) => {
  res.send(JSON.stringify(users));
};
const getUsersUUID = (req, res) => {
  const params = req.params.uuid;
  const user = users.data.filter(item => item.login.uuid === params);
  if (user[0]) {
    res.send(user);
  } else {
    res.status(404).send('not found');
  }
};

const getBySearch = (req, res) => {
  const { gender, age } = req.query;
  // const result = schema.validate({

  // });
  const error = getQueryErrors({
    age,
    gender,
  });

  if (error) {
    res.status(422).send('Invalid Data');
    console.log(error);
  } else {
    const user = users.data.filter(
      item =>
        item.gender === gender.toLowerCase() && item.dob.age === parseInt(age)
    );
    res.send(user);
  }
};

// url = http://localhost:3000/users/search?gender=female&age=49

module.exports = {
  getAllUsers,
  getUsersUUID,
  getBySearch,
};
