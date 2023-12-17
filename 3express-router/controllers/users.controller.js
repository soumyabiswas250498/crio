const users = require('../users.json');

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
  const query = req.query;
  const user = users.data.filter(
    item =>
      item.gender === query.gender.toLowerCase() &&
      item.dob.age === parseInt(query.age)
  );
  res.send(user);
  //   console.log(user);
};

module.exports = {
  getAllUsers,
  getUsersUUID,
  getBySearch,
};
