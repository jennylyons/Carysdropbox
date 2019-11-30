function showForm(shownFormId) {
  const isSubmitForm = shownFormId === 'submit-form';
  const hiddenFormId = isSubmitForm ? 'get-form' : 'submit-form';
  const selectedTabId = `${shownFormId}-tab`;
  const deselectedTabId = `${hiddenFormId}-tab`;

  const hiddenForm = document.getElementById(hiddenFormId);
  const shownForm = document.getElementById(shownFormId);
  const selectedTab = document.getElementById(selectedTabId);
  const deselectedTab = document.getElementById(deselectedTabId);

  shownForm.style.display = 'block';
  hiddenForm.style.display = 'none';
  selectedTab.classList.add('active');
  deselectedTab.classList.remove('active');
}

async function getAllTasks() {
  const response = await fetch('http://localhost:3000/tasks');
  const tasks = response.json();
  return tasks;
}

async function submitTask(fields) {
  const { name, duration, time, day, energy, cost, progression, multiplePartners } = fields;
  const response = await fetch('http://localhost:3000/tasks', {
    method: 'POST',
    body: {
      ...fields,
    }
  });
  return response;
}

const getFields = () => {
  const name = document.getElementById('name').value;
  const duration = document.getElementById('duration').value;
  const day = document.getElementById('day').value;
  const time = document.getElementById('time').value;
  const energy = document.getElementById('energy').value;
  const cost = document.getElementById('cost').value;
  const progression = document.getElementById('progression').value;
  const multiplePartners = document.getElementById('multiplePartners').value;

  return { name, duration, time, day, energy, cost, progression, multiplePartners };
}

const submit = () => {
  const fields = getFields();
  console.log('fields', fields);
  submitTask(fields);
};

const renderTasks = async () => {
  const tasks = await getAllTasks();
  const tasksJson = JSON.stringify(tasks);
  const taskArea = document.getElementById('taskArea');
  const div = document.createElement('div');
  div.innerHTML = tasksJson;
  taskArea.appendChild(div);
};