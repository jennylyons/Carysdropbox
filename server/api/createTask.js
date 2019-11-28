const db = require('../../db/index.js');
const { taskRepo } = db;

module.exports = async (req, res) => {
  const { duration, time, day, energy, cost, progression, multiplePartners } = req.body;
  try {
    const task = await taskRepo.create(duration, time, day, energy, cost, progression, multiplePartners);
    res.send(task);
  } catch (err) {
    console.error(err);
  }
};