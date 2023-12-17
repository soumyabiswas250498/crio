const verifyAuth = (req, res, next) => {
  const authorization = req.headers['authorization'];
  console.log(authorization);
  next();
};

module.exports = {
  verifyAuth,
};
