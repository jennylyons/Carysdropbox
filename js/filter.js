const filterByTime = (tasks, startTime, endTime) => tasks.filter(task => getIsBetweenTimeRange(startTime, endTime, task.time));

const filterByDate = (tasks, startDate, endDate) => tasks.filter(task => getIsBetweenDateRange(startDate, endDate, task.day));

const filterPropertyMatch = (tasks, fields, property) => tasks.filter(task => task[property] === fields[property]);

const getIsBetweenTimeRange = (startTime, endTime, taskTime) => {

  console.log('startTime: ', startTime)
  console.log('taskTime: ', taskTime)
  console.log('endTime: ', endTime)
  console.log('startTime mins: ', getMinutes(startTime))
  console.log('taskTime mins: ', getMinutes(taskTime))
  console.log('endTime mins: ', getMinutes(endTime))
  return getMinutes(startTime) <= getMinutes(taskTime) && getMinutes(taskTime) <= getMinutes(endTime);
};

const getIsBetweenDateRange = (startDate, endDate, taskDate) => {
  return getDays(startDate) <= getDays(taskDate) && getDays(taskDate) <= getDays(endDate);
};

const filterTasks = (tasks) => {
  const fields = getFilterFields();

  console.log('fields in filter', fields)
  console.log('tasks in filter', tasks)

  if (fields.name) {
    tasks = filterPropertyMatch(tasks, fields, 'name');
  }

  if (fields.startTime && fields.endTime) {
    tasks = filterByTime(tasks, fields.startTime, fields.endTime);
  }

  if (fields.startDate && fields.endDate) {
    tasks = filterByDate(tasks, fields.startDate, fields.endDate);
  }

  if (fields.duration) {
    tasks = filterPropertyMatch(tasks, fields, 'duration');
  }

  if (fields.energy) {
    tasks = filterPropertyMatch(tasks, fields, 'energy');
  }

  if (fields.progression) {
    tasks = filterPropertyMatch(tasks, fields, 'progression');
  }
  
  if (fields.multiplePartners !== null) {
    tasks = tasks.filter(task => task.multiple_partners === fields.multiplePartners);
  }

  return tasks;
};

