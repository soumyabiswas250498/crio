const db = require('../db.json');

const getCurrencies = (req, res) => {
  // http://localhost:3000/currencies?abc=36
  // console.log('hello');
  const querryParam = req.query;
  if (querryParam?.id) {
    const data = db.data.filter(
      item => item.id === querryParam.id.toUpperCase()
    );
    if (data[0]) {
      res.send(data);
    } else {
      res.status(404).send('Not Found');
    }
  } else {
    res.send(JSON.stringify(db));
  }
};

module.exports = {
  getCurrencies,
};
