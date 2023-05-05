const Task = require("../models/tasks");

//get all tasks endpoint
const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({});
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//create task endpoint
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    console.log(req.body)
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//get single task
const getSingleTask = async (req, res) => {
    try {
    const {id: taskID} = req.params;
    const task = await Task.findOne({_id: taskID});
    if(!task){
       return res.status(404).json({ msg: `No task with this ID: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//update task
const updateTask = async (req, res) => {
      try {
    const {id: taskID} = req.params;
    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
      new: true,
      runValidators: true
    });
    if(!task){
       return res.status(404).json({ msg: `No task with this ID: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//delete task
const deleteTask = async (req, res) => {
     try {
    const {id: taskID} = req.params;
    const task = await Task.findOneAndDelete({_id: taskID});
    if(!task){
       return res.status(404).json({ msg: `No task with this ID: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
