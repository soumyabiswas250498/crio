const router = require('express').Router();

const { getCurrencies } = require('../controllers/currencies.controller');

router.get('/', getCurrencies);

module.exports = router;
