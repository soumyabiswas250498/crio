const PASSWORD = process.env.ROUTE_PASSWORD;
// console.log(PASSWORD, '***');

const verifyAuth = (req, res, next) => {
  const authorization = req.headers['authorization'];
  //   console.log(authorization);
  if (authorization !== PASSWORD || !authorization) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
};

module.exports = {
  verifyAuth,
};
