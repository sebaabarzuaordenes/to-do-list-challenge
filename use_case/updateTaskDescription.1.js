const { ADMINISTRATOR, USER } = require('../consts/profiles');

async function updateTaskDescription (user, taskId, description, taskRepository) {

    if (user.profile !== ADMINISTRATOR || user.profile !== USER ) { 
        throw new Error('accion no peritida');
    }

    if (!taskId) {
        throw new Error('item does not be falsy');
    }

    if (!description) {
        throw new Error('the description is required.');
    }

    return await taskRepository.updateDescrition(taskId, description);
}

module.exports = updateTaskDescription;