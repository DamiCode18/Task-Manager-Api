const { asyncWrapper } = require("../middlewares/async");
const Task = require("../models/tasks");
const User = require("../models/user");

//get all tasks endpoint
const getAllTasks = asyncWrapper(async (req, res) => {
  const userId = req.user.user_id;
  const task = await Task.find({ userId });
  res.status(200).json({ success: true, data: task });
});

//create task endpoint
const createTask = asyncWrapper(async (req, res) => {
  // check if userId exist
  const userId = req.user.user_id;
  const { title, description } = req.body;
  if (userId) {
    const task = new Task({ title, description, userId });
    await task.save();
    res
      .status(201)
      .json({ success: true, msg: "Task created successfully", data: task });
  }
});

//get single task
const getSingleTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const userId = req.user.user_id;
  const task = await Task.findOne({ _id: taskID, userId });
  if (!task) {
    return res.status(404).json({ msg: `No task with this ID: ${taskID}` });
  }
  res.status(200).json({ success: true, data: task });
});

//update task
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const userId = req.user.user_id;

  const task = await Task.findOneAndUpdate({ _id: taskID, userId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: `No task with this ID: ${taskID}` });
  }
  res.status(200).json({
    success: true,
    msg: `Task with this ID ${taskID} updated successfully`,
    data: task,
  });
});

//delete task
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const userId = req.user.user_id;

  const task = await Task.findOneAndDelete({ _id: taskID, userId });
  if (!task) {
    return res.status(404).json({ msg: `No task with this ID: ${taskID}` });
  }
  res
    .status(200)
    .json({ success: true, msg: `Task with this ID ${taskID} deleted` });
});

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
