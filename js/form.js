function hideForm() {
  const writeForm = document.getElementById('write-form');
  const body = document.getElementsByTagName('body')[0];
  body.removeChild(writeForm);
} 