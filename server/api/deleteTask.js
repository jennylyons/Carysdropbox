const db = require('../../db/index.js');
const { taskRepo } = db;

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await taskRepo.delete(id);
    res.send(task);
  } catch (err) {
    console.error(err);
  }
};