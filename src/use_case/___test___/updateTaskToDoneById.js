const { value } = require('unit.js');
const useCaseUpdateTaskToDoneById = require('../updateTaskToDoneById');

const Jwt = require('../../common/jwt');
const jwt = new Jwt();


const taskRepository = {
  updateTaskToDoneById: async () => true,
}

describe('Test unitarios "update Task To Done By Id" ', async () => {
  
  it('Debe retornar "taskIdsCollection does not be falsy." si taskIdsCollection es undefined', async () => {
    let taskIdsCollection = null;
    let result;
    try {
      await useCaseUpdateTaskToDoneById(null, taskIdsCollection, taskRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('taskIdsCollection does not be falsy.');
  });

  it('Debe retornar "Only administrator users can execute this action." si no es administrador', async () => {
    
    let payload = {
      profile: 2,
      userName: "userName2",
    };
    
    let token = await jwt.createToken(payload);
    
    let taskIdsCollection = {
      id: 1,
    };
    let result;
    try {
      await useCaseUpdateTaskToDoneById(token, taskIdsCollection, taskRepository);
    } catch (error) {
      result = error.message;
    }
    value(result).is('Only administrator users can execute this action.');
  });

  it('Debe retornar "true" si el estatus de la tarea se actualizo con éxito', async () => {
    let payload = {
      profile: 1,
      userName: "userName1",
    };
    
    let token = await jwt.createToken(payload);
    
    let taskIdsCollection = {
      id: 1,
      status: "done"
    };

    const result = await useCaseUpdateTaskToDoneById(token, taskIdsCollection, taskRepository);
    value(result).isTrue();
  });

});
