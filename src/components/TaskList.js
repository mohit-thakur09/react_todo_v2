import React from "react";
import TaskItem from "./TaskItem";

function TaskList({
  taskList,
  getDeletedTaskHandler,
  getEditedTaskHandler,
  toggleTaskHandler,
}) {
  return (
    <>
      {taskList.map((taskItem, index) => (
        <TaskItem
          taskItem={taskItem}
          key={index}
          id={index}
          getDeletedTaskHandler={getDeletedTaskHandler}
          getEditedTaskHandler={getEditedTaskHandler}
          toggleTaskHandler={toggleTaskHandler}
        />
      ))}
    </>
  );
}

export default TaskList;
