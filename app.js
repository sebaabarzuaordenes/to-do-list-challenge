const express = require("express");
const bodyParser = require('body-parser');
const app = express();
if (process.env.NODE_ENV === undefined) {
  require('dotenv').config();
}

const  { userController, taskController}  = require('./src/controllers');
const { auth }  = require('./src/middlewares');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json({ type: 'application/json' }));

app.listen(process.env.HTTP_PORT, () => {
  console.log('Aplication running at port', process.env.HTTP_PORT);
});

// P U B L I C  R O U T E S

app.get('/', (req, res) => {
  res.send('api start');
});

app.get('/getAllTaks', async (req, res) => {
  const resp = await taskController.getAllTasks();
  res.send(resp);
});

app.get('/getAllUsers', async (req, res) => {
  const resp = await userController.getAllUsers();
  res.send(resp);
});

app.post('/login', async (req, res, next) => {
  const user = req.body;
  try {
    const resp = await userController.authentication(user)
    res.send(resp);
  }
  catch (e) {
    next(e);
  }
});

app.post('/createUser', async (req, res, next) => {
  const user = req.body;
  try {
    const resp = await userController.createUser(user);
    res.send(resp);
  }
  catch (e) {
    next(e);
  }
});

// M I D D L E W A R E

app.use(auth);

// P R I V A T E  R O U T E S

app.post('/createTask', async (req, res, next) => {
  const task = req.body;
  try {
    const resp = await taskController.createTask(task);
    res.send(resp);
  }
  catch (e) {
    next(e);
  }
});

app.patch('/updateTaskDescriptionById', async (req, res, next) => {
  const task = req.body;
  try {
    const resp = await taskController.updateDescriptionById(task);
    res.send(resp);
  }
  catch (e) {
    next(e);
  }
});

app.patch('/updateTaskToDoneById', async (req, res, next) => {
  const task = req.body;
  try {
    const resp = await taskController.updateTaskToDoneById(req.headers.authorization, task);
    res.send(resp);
  }
  catch (e) {
    next(e);
  }
});

// B U L K  R O U T E S

app.post('/bulkCreateTask', async (req, res, next) => {
  const taskslist = req.body;
  try {
    const resp = await taskController.bulkCreateTask(taskslist);
    res.send(resp);
  }
  catch (e) {
    next(e);
  }
});

app.patch('/updateTaskToDoneBulk', async (req, res, next) => {
  const taskslist = req.body;
  try {
    const resp = await taskController.updateTaskToDoneBulk(taskslist);
    res.send(resp);
  }
  catch (e) {
    next(e);
  }
});

app.patch('/updateTaskDescriptionBulk', async (req, res, next) => {
  const taskslist = req.body;
  try {
    const resp = await taskController.updateTaskDescriptionBulk(taskslist);
    res.send(resp);
  }
  catch (e) {
    next(e);
  }
});

app.use(function (err, req, res, next) {
  console.error('err.stack', err.stack);
  res.status(500).send(err.message);
});
