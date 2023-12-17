const router = require('express').Router();

const {
  getAllUsers,
  getUsersUUID,
  getBySearch,
} = require('../controllers/users.controller');

// router.get('/', (req, res) => {
//   res.send('success');
// });
router.get('/', getAllUsers);
router.get('/search', getBySearch);
router.get('/:uuid', getUsersUUID);

module.exports = router;
