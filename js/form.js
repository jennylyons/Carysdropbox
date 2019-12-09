
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

function toggleHideElement(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

async function getAllTasks() {
  const response = await fetch('http://localhost:3000/tasks');
  const tasks = await response.json();

  tasks.forEach(task => task.multiple_partners = task.multiple_partners ? true : false);

  return tasks;
}

async function submitTask(fields) {
  validateSubmitFields(fields);

  const response = await fetch('http://localhost:3000/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...fields,
    }),
  });
  return response;
}

const getFilterFields = () => {
  const name = document.getElementById('nameBox').style.display === 'block' ? _.get(document.getElementById('nameFilter'), 'value') : null;
  const startDate = document.getElementById('dayBox').style.display === 'block' ? _.get(document.getElementById('startDateFilter'), 'value') : null;
  const endDate = document.getElementById('dayBox').style.display === 'block' ? _.get(document.getElementById('endDateFilter'), 'value') : null;
  const startTime = document.getElementById('timeBox').style.display === 'block' ? _.get(document.getElementById('startTimeFilter'), 'value') : null;
  const endTime = document.getElementById('timeBox').style.display === 'block' ? _.get(document.getElementById('endTimeFilter'), 'value') : null;
  const energy = document.getElementById('energyBox').style.display === 'block' ? _.get(document.getElementById('energyFilter'), 'value') : null;
  const progression = document.getElementById('progressionBox').style.display === 'block' ? _.get(document.getElementById('progressionFilter'), 'value') : null;
  const multiplePartners = document.getElementById('multiplePartnersBox').style.display === 'block' ? _.get(document.getElementById('multiplePartnersFilter'), 'checked') : null;
  let duration = document.getElementById('durationBox').style.display === 'block' ? _.get(document.getElementById('durationFilter'), 'value') : null;
  let cost = document.getElementById('costBox').style.display === 'block' ? _.get(document.getElementById('costFilter'), 'value') : null;
  duration = duration !== undefined && duration !== null ? Number(duration) : null;
  cost = cost !== undefined && cost !== null ? Number(cost) : null;

  return { name, duration, startTime, endTime, startDate, endDate, energy, cost, progression, multiplePartners };
}

const getSubmitFields = () => {
  const name = _.get(document.getElementById('name'), 'value', '');
  const day = _.get(document.getElementById('day'), 'value', '');
  const time = _.get(document.getElementById('time'), 'value', '');
  const energy = _.get(document.getElementById('energy'), 'value', '');
  const progression = _.get(document.getElementById('progression'), 'value', '');
  const multiplePartners = _.get(document.getElementById('multiplePartners'), 'checked', '');
  let duration = Number(document.getElementById('duration').value);
  let cost = Number(document.getElementById('cost').value);
  duration = isNaN(Number(duration)) ? null : Number(duration);
  cost = isNaN(Number(cost)) ? null : Number(cost);

  return { name, duration, time, day, energy, cost, progression, multiplePartners};
}

const submitForm = async () => {
  const fields = getSubmitFields();
  await submitTask(fields);

  clearTableRows()

  await renderTasks();
};
