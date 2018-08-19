const { value } = require('unit.js');
const useCaseUpdateTaskDescriptionById = require('../updateTaskDescriptionById');

const taskRepository = {
  updateTaskDescriptionById: async () => true,
}

describe('Test unitarios update task description', async () => {
  it('Debe retornar "the description is required." si no hay description', async () => {
    const task = {
      id: 1,
      description: null,
    };

    let result;
    try {
      await useCaseUpdateTaskDescriptionById(task, taskRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('the description is required.');
  });

  it('Debe retornar "the task id is required." si no hay id', async () => {
    const task = {
      description: 'Descripcion modificada',
    };

    let result;
    try {
      await useCaseUpdateTaskDescriptionById(task, taskRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('the task id is required.');
  });

  it('Debe retornar "true" si la descripción de la tarea se actualizo con éxito', async () => {
    const task = {
      id: 1,
      description: 'Descripcion modificada',
    };

    const result = await useCaseUpdateTaskDescriptionById(task, taskRepository);
    value(result).isTrue();
  });
});
