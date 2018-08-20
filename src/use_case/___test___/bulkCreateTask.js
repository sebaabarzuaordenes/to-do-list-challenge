const { value } = require('unit.js');
const bulkCreateTask = require('../bulkCreateTask');

const taskRepository = {
  bulkCreateTask: async () => true,
};

describe('Test unitario "Bulk Create Task" ', () => {

  it('Debe retornar "Task does not be falsy." si la lista es undefined', async () => {
    let taskslist = null;
    let result;
    try {
      await bulkCreateTask(taskslist, taskRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('Task does not be falsy.');
  });
  it('Debe retornar "Empty taskslist, must contain at least one item." si taskslist a modificar viene vacia', async () => {
    let taskslist = [];
    let result;
    try {
      await bulkCreateTask(taskslist, taskRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('Empty taskslist, must contain at least one item.');
  });
  
  it('Debe retornar true si el entrego un task válido', async () => {
    let taskslist = [
    { description: "" },
    { description: "Tarea 6" },
    { description: "Tarea 7" },
    { description: "Tarea 8" },
    { description: "Tarea 9" }
    ];
    const result = await bulkCreateTask(taskslist, taskRepository);
    value(result).isTrue();
  });
});
