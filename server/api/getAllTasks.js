const db = require('../../db/index.js');
const { taskRepo } = db;

module.exports = async (req, res) => {
  try {
    const tasks = await taskRepo.getAll();
    res.send(tasks);
  } catch (err) {
    console.error(err);
  }
};