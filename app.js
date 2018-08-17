const express = require("express");
const bodyParser = require('body-parser');
const app = express();

const taskController = require('./src/controllers/taskController');


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json({ type: 'application/json' }));
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

app.listen(9000, () => {
    console.log('STARTS');
});

app.use(function(req, res, next) {
    // leer header del JWT
    req.user = {
        id: 1,
        profile: 2
    };
    next();
});

app.get('/', (req, res) => {
    res.send('api start');
});

app.post('/createTask', async (req, res, next) => {
    const task = req.body;
    console.log('req', req);
    try{
        const resp = await taskController.createTask(req.user, task);
        res.send(resp);
    }
    catch(e){
        next(e);
    }
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(err.message);
});
