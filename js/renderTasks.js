const clearTableRows = () => {
  const taskAreaBody = document.getElementById('taskAreaBody');
  Array.from(taskAreaBody.children).forEach(child => {
    taskAreaBody.removeChild(child);
  })
};

const createTaskTableRow = (taskAreaBody, task) => {
  const row = document.createElement('tr');
  console.log('task', task)

  Object.entries(task).forEach((tuple) => {
    const td = document.createElement('td');
    td.textContent = tuple[1]
    row.appendChild(td);
  });

  taskAreaBody.appendChild(row);
};

const renderRandomTask = async () => {
  const tasks = await getAllTasks();
  const taskAreaBody = document.getElementById('taskAreaBody');

  const randomTask = tasks[Math.floor(Math.random() * tasks.length)];

  createTaskTableRow(taskAreaBody, randomTask);

  updateNumberOfResults(1);
};

const updateNumberOfResults = (numberOfResults) => {
  const message = numberOfResults === 1 ? `${numberOfResults} result was found.` : `${numberOfResults} results were found.`;
  document.getElementById('numResultsMessage').textContent = message;
};

const renderTasks = async () => {
  let tasks = await getAllTasks();

  tasks = filterTasks(tasks);

  const taskAreaBody = document.getElementById('taskAreaBody');

  tasks.forEach(task => {
    createTaskTableRow(taskAreaBody, task);
  });

  updateNumberOfResults(tasks.length);
};