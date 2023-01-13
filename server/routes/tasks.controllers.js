const Task = require('./../models/Task');

/** POST */
const addTask = async (req, res) => {
  try {
    const { text } = req.body;

    const newTask = new Task({
      text,
    });
    const savedTask = await newTask.save();

    res.status(201).json(savedTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/** GET */
const getAll = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getIncompleted = async (req, res) => {
  try {
    const tasks = await Task.find({ isCompleted: false });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getCompleted = async (req, res) => {
  try {
    const tasks = await Task.find({ isCompleted: true });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/** PATCH */
const changeStatus = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Task.findById(taskId);
    const taskStatus = task.isCompleted;

    task.isCompleted = !taskStatus;
    const savedTask = await task.save();
    res.status(200).json(savedTask);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/** DELETE */
const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const deletedTask = await Task.findByIdAndDelete(taskId);
    res.status(200).json(deletedTask);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const deleteCompletedTasks = async (req, res) => {
  try {
    const completedTasks = await Task.deleteMany({ isCompleted: true });
    res.status(200).json({ deletedTasks: completedTasks });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  addTask,
  getAll,
  getIncompleted,
  getCompleted,
  changeStatus,
  deleteTask,
  deleteCompletedTasks,
};
