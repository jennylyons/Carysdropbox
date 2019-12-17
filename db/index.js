const AppDAO = require('./dao.js');
const TaskRepository = require('./taskRepository.js');
const sampleTasks = require('./sampleTasks.json');

const dao = new AppDAO('./db/database.db');
const taskRepo = new TaskRepository(dao);


(async () => {
  await taskRepo.createTable();

  await Promise.all(
    sampleTasks.map(task => {
      const {
        name,
        duration,
        time,
        day,
        energy,
        cost,
        progression,
        multiplePartners,
      } = task;
      return taskRepo.create(
        name,
        duration,
        time,
        day,
        energy,
        cost,
        progression,
        multiplePartners,
      );
    }),
  );

  const task1 = await taskRepo.getById(1);
  console.log(`task1: ${task1.progression}`);
  // const task2 = await taskRepo.getById(2);
  // console.log(`task2: ${task2.progression}`);
  // const task3 = await taskRepo.getById(3);
  // console.log(`task3: ${task3.progression}`);
})();

module.exports = {
  taskRepo,
}
