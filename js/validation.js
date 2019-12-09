
const getMinutes = (time) => {
  debugger;
  const split = time.split(' ');
  const timePortion = split[0];
  const timeSplit = timePortion.split(':');
  let hours = Number(timeSplit[0]);
  let minutes = Number(timeSplit[1]);

  if (split[1] === 'AM' && hours === 12) {
    hours = 0;
  } 
  
  if (split[1] === 'PM') {
    hours = hours + 12;
  }

  return (hours * 60) + minutes;
}

const getDays = (date) => {
  const split = date.split('/');
  const year = Number(split[2]);
  const month = Number(split[0]);
  let days = Number(split[1]);
  const daysFromYears = year * 365;
  const daysFromMonths = month * 12;
  return days + daysFromMonths + daysFromYears;
}

// const validateFilterTime = (startTime, endTime) => {
//   if (getMinutes(endTime) < getMinutes(startTime)) {
//     alert('Your beginning time needs to be before your end time.')
//     throw new Error('The time span was invalid.')
//   }
// };

const validateIntegerField = (id) => {
  const fieldValue = document.getElementById(id).value;
  
  if (isNaN(Number(fieldValue))) {
    alert(`You need to put a number in the ${id} field.`);
    throw new Error(`The ${id} field take number values only.`);
  }
}

const validateSubmitFields = (fields) => {
  if (Object.values(fields).some(value => value === '')) {
    alert('You left a field blank! Make sure to fill out every field and resubmit.');
    throw new Error('Some fields were missing on submit.')
  }

  validateIntegerField('cost');
  validateIntegerField('duration');
};