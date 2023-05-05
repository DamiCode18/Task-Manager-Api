const { asyncWrapper } = require("../middlewares/async");
const Task = require("../models/tasks");

//get all tasks endpoint
const getAllTasks = asyncWrapper(
async (req, res) => {
    const task = await Task.find({});
    res.status(200).json({ success: true, data: task });
}) 

//create task endpoint
const createTask = asyncWrapper (async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ success: true, data: task });
});

//get single task
const getSingleTask = asyncWrapper (async (req, res, next) => {
    const {id: taskID} = req.params;
    const task = await Task.findOne({_id: taskID});
    if(!task){
       return res.status(404).json({ msg: `No task with this ID: ${taskID}` });
    }
    res.status(200).json({ success: true, data: task });
});

//update task
const updateTask = asyncWrapper (async (req, res) => {
    const {id: taskID} = req.params;
    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
      new: true,
      runValidators: true
    });
    if(!task){
       return res.status(404).json({ msg: `No task with this ID: ${taskID}` });
    }
    res.status(200).json({ success: true, data: task });
});

//delete task
const deleteTask = asyncWrapper (async (req, res) => {
    const {id: taskID} = req.params;
    const task = await Task.findOneAndDelete({_id: taskID});
    if(!task){
       return res.status(404).json({ msg: `No task with this ID: ${taskID}` });
    }
    res.status(200).json({ success: true, data: task });
});

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
