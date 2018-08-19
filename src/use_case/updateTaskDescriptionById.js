
async function updateTaskDescriptionById(task, taskRepository) {
  if (!task) {
    throw new Error('item does not be falsy');
  }

  if (!task.description) {
    throw new Error('the description is required.');
  }

  if (!task.id) {
    throw new Error('the task id is required.');
  }

  const updateDescription = await taskRepository.updateTaskDescriptionById(task);
  console.log('use case updateDescription', updateDescription)
  return updateDescription;
}

module.exports = updateTaskDescriptionById;
