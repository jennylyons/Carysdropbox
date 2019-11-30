const AppDAO = require('./dao.js');
const TaskRepository = require('./taskRepository.js');
const sampleTasks = require('./sampleTasks.json');

const dao = new AppDAO('./db/database.db');
const taskRepo = new TaskRepository(dao);

module.exports = {
  taskRepo,
}
