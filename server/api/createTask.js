const db = require('../../db/index.js');
const { taskRepo } = db;

module.exports = async (req, res) => {
  const { name, duration, time, day, energy, cost, progression, multiplePartners } = req.body;
  try {
    const task = await taskRepo.create(name, duration, time, day, energy, cost, progression, multiplePartners);
    res.send(task);
  } catch (err) {
    console.error(err);
  }
};