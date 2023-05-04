const getAllTasks = (req, res) => {
    res.json({name: req.body})
}
const createTask = (req, res) => {
    res.json(req.body);
}
const getSingleTask = (req, res) => {
    res.json({id: req.params.id})
}
const updateTask = (req, res) => {
    res.json(req.body)
}
const deleteTask = (req, res) => {
    res.json({id: req.params.id})
}

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}