const filterByName = (tasks, searchString) => tasks.filter(task => task.name && task.name.toLowerCase().includes(searchString.toLowerCase()));

// const filterByTime = (tasks, startTime, endTime) => tasks.filter(task => getIsBetweenTimeRange(startTime, endTime, task.time));

// const filterByDate = (tasks, startDate, endDate) => tasks.filter(task => getIsBetweenDateRange(startDate, endDate, task.day));

const filterPropertyMatch = (tasks, fields, property) => tasks.filter(task => task[property] === fields[property]);

// const getIsBetweenTimeRange = (startTime, endTime, taskTime) => {
//   return getMinutes(startTime) <= getMinutes(taskTime) && getMinutes(taskTime) <= getMinutes(endTime);
// };

// const getIsBetweenDateRange = (startDate, endDate, taskDate) => {
//   return getDays(startDate) <= getDays(taskDate) && getDays(taskDate) <= getDays(endDate);
// };

const filterTasks = (tasks) => {
  const fields = getFilterFields();

  if (fields.name) {
    tasks = filterByName(tasks, fields.name);
  }

  if (fields.day) {
    tasks = filterPropertyMatch(tasks, fields, 'day');
  }

  if (fields.time) {
    tasks = filterPropertyMatch(tasks, fields, 'time');
  }

  if (fields.duration) {
    tasks = filterPropertyMatch(tasks, fields, 'duration');
  }

  if (fields.energy) {
    tasks = filterPropertyMatch(tasks, fields, 'energy');
  }

  if (fields.cost) {
    tasks = filterPropertyMatch(tasks, fields, 'cost');
  }

  if (fields.progression) {
    tasks = filterPropertyMatch(tasks, fields, 'progression');
  }
  
  if (fields.multiplePartners) {
    tasks = tasks.filter(task => task.multiple_partners === fields.multiplePartners);
  }

  return tasks;
};

