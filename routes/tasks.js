const express = require('express');
const { getAllTasks, createTask, getSingleTask, updateTask, deleteTask } = require('../controllers/tasks');
const router = express.Router();
const auth = require("../middlewares/auth");


router.route('/', auth).get(getAllTasks).post(createTask)
router.route('/:id', auth).get(getSingleTask).patch(updateTask).delete(deleteTask)

module.exports = router;