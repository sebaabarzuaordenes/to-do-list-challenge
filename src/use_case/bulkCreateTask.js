async function bulkCreateTask(taskslist, taskRepository) {  
  if (!taskslist) {
    throw new Error('Task does not be falsy.');
  }
  
  if (taskslist.length == 0 ) {
    throw new Error('Empty taskslist, must contain at least one item.');
  }

  taskslist.forEach(function(obj) {
    obj["status"] = "PENDING";
    if (!obj.description)
      obj.description = "-"
  });
  return await taskRepository.bulkCreateTask(taskslist);
}

module.exports = bulkCreateTask;
