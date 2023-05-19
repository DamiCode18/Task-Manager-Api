const express = require("express");
const {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");
const router = express.Router();

const auth = require("../middlewares/auth");

router.route("/").get(auth, getAllTasks).post(auth, createTask);
router
  .route("/:id")
  .get(auth, getSingleTask)
  .patch(auth, updateTask)
  .delete(auth, deleteTask);

module.exports = router;
