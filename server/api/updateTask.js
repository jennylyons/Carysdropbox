const db = require('../../db/index.js');
const { taskRepo } = db;

module.exports = async (req, res) => {
  const { name, duration, time, day, energy, cost, progression, multiplePartners } = req.body;
  const { id } = req.params;
  try {
    const task = await taskRepo.update(name, duration, time, day, energy, cost, progression, multiplePartners, id);
    res.send(task);
  } catch (err) {
    console.error(err);
  }
};