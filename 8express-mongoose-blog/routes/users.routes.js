const router = require('express').Router();

const {
  getAllUsers,
  getUsersUUID,
  getBySearch,
} = require('../controllers/users.controller');

router.get('/', getAllUsers);
router.get('/search', getBySearch);
router.get('/:uuid', getUsersUUID);

module.exports = router;
