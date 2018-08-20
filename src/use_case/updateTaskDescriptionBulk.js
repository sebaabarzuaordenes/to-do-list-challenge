async function updateTaskDescriptionBulk(taskCollection, taskRepository) {
  if (!taskCollection) {
    throw new Error('taskCollection can not be falsy.');
  }
  
  if (taskCollection.length == 0 ) {
    throw new Error('Empty taskCollection, must contain at least one item.');
  }

  return await taskRepository.updateTaskDescriptionBulk(taskCollection);
}

module.exports = updateTaskDescriptionBulk;
