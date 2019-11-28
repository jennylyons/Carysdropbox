const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const api = require('./api/index.js')

const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = api;
// const router = require('./resources/router');

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('YAY'));
app.get('/tasks', getAllTasks);
app.post('/tasks', createTask);
app.get('/tasks/:id', getTaskById);
app.put('/tasks/:id', updateTask);
app.delete('/tasks/:id', deleteTask);

app.listen(port, function(err) {
  if (err) {
    console.log('Something went wrong!');
  }
  console.log('Listening on port ' + port);
});


// to keep heroku deployment awake
// setInterval(function() {
//   http.get('http://carymeskell.com');
// }, 1200000); // every 20 minutes (1200000)