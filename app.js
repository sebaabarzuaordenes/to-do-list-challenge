const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const taskController = require('./src/controllers/taskController');
const { userController } = require('./src/controllers/userController');
const { authentication }  = require('./src/middlewares');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json({ type: 'application/json' }));

app.listen(9000, () => {
  console.log('STARTS');
});


app.get('/', (req, res) => {
  res.send('api start');
});

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
// middleware
app.use(authentication);
app.post('/createTask', async (req, res, next) => {
  const task = req.body;
  console.log('req', req);
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
