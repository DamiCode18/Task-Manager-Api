const express = require('express');
const { getAllUsers } = require('../controllers/users');
const router = express.Router();

router.route('/').get(getAllUsers);
// router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)

module.exports = router;