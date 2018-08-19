const { value } = require('unit.js');
const useCaseUpdateTaskToDoneById = require('../updateTaskToDoneById');

const taskRepository = {
  updateTaskToDoneById: async () => true,
}

describe('Test unitarios update task status by id', async () => {
  it('Debe retornar "Only administrator users can execute this action." si no es administrador', async () => {
    
    const authorization ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InByb2ZpbGUiOjIsInVzZXJOYW1lIjoidXNlck5hbWUyIn0sImlhdCI6MTUzNDY0MzcwMCwiZXhwIjoxNTM0NjQ3MzAwfQ.zbyKE9tRFa1xnS-m8Tpmd6SBbHoE-MoVKBU2x2xku0s';
    const task = {
      id: 1,
      status: "done"
    };
    let result;
    try {
      await useCaseUpdateTaskToDoneById(authorization, task, taskRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('Only administrator users can execute this action.');
  });

  it('Debe retornar "Task does not be falsy." si la task es undefined', async () => {
    
    const req = {
      headers: {
        authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InByb2ZpbGUiOjEsInVzZXJOYW1lIjoidXNlck5hbWUxIn0sImlhdCI6MTUzNDYzOTU1MywiZXhwIjoxNTM0NjQzMTUzfQ.GOpEcZp9pLYtE_2zaaSaGoRIULe1lJ_N-DwCYJTnLCs'
      }
    }
    const task = null;

    let result;
    try {
      await useCaseUpdateTaskToDoneById(req, task, taskRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('Task does not be falsy.');
  });

  it('Debe retornar "true" si el estatus de la tarea se actualizo con éxito', async () => {
    const authorization ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InByb2ZpbGUiOjEsInVzZXJOYW1lIjoidXNlck5hbWUxIn0sImlhdCI6MTUzNDY0MzMyMywiZXhwIjoxNTM0NjQ2OTIzfQ.MiBDq0NsVkPuu9FFkjNqiEO_SlCAsxISXL-dN2cgHkg';
    const task = {
      id: 1,
      status: "done"
    };

    const result = await useCaseUpdateTaskToDoneById(authorization, task, taskRepository);
    value(result).isTrue();
  });

});
