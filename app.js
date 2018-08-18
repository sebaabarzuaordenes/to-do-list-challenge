const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
if (process.env.NODE_ENV === undefined) {
  require('dotenv').config();
}
const taskController = require('./src/controllers/taskController');
const  { userController, authentication}  = require('./src/controllers');
const { auth }  = require('./src/middlewares');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json({ type: 'application/json' }));

app.listen(process.env.HTTP_PORT, () => {
  console.log('STARTS');
});

app.post('/', (req, res) => {
  res.send('api start');
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

authentication

app.post('/userCreate', async (req, res, next) => {
  const user = req.body;
  try {
    const resp = await userController.userCreate(user);
    res.send(resp);
  }
  catch (e) {
    next(e);
  }
});
// middleware auth
app.use(auth);
app.post('/createTask', async (req, res, next) => {
  const task = req.body;
  try {
    const resp = await taskController.createTask(req.user, task);
    res.send(resp);
  }
  catch (e) {
    next(e);
  }
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err.message);
});
