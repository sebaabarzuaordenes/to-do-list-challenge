const { value } = require('unit.js');
const taskCreate = require('../taskCreate');
const { ADMINISTRATOR } = require('../../consts/profiles');

const taskRepository = {
  create: async () => true,
};

describe('Test unitarios task create', () => {
  it('Debe retornar true si el entrego un task válido', async () => {
    const task = {
      description: 'primera tarea',
    };
    const result = await taskCreate(task, taskRepository);
    value(result).isTrue();
  });

  it('Debe retornar "The field description is required." si no hay description', async () => {
    const task = {
      description: '',
    };
    let result;
    try {
      await taskCreate(task, taskRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('The field description is required.');
  });

  it('Debe retornar "Task does not be falsy." si la task se creo con exito', async () => {
    const task = null;
    let result;
    try {
      await taskCreate(task, taskRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('Task does not be falsy.');
  });
});
