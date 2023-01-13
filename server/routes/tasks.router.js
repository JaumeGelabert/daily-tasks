const express = require('express');
const {
  addTask,
  getAll,
  getIncompleted,
  getCompleted,
  changeStatus,
  deleteTask,
  deleteCompletedTasks,
} = require('./tasks.controllers');

const taskRouter = express.Router();

/** POST */
taskRouter.post('/new', addTask); // "tasks/new"

/** GET */
taskRouter.get('/all', getAll); // "tasks/all"
taskRouter.get('/incomplete', getIncompleted); // "tasks/incomplete"
taskRouter.get('/complete', getCompleted); // "tasks/complete"

/** PATCH */
taskRouter.patch('/:taskId/status', changeStatus); // "tasks/:taskId/status"

/** DELETE */
taskRouter.delete('/:taskId/delete', deleteTask); // "tasks/:taskId/delete"
taskRouter.delete('/delete/completed', deleteCompletedTasks); // "tasks/delete/completed"

module.exports = taskRouter;