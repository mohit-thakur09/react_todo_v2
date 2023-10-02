import React, { useState } from "react";
import styles from "./styles/taskItem.module.css";

function TaskItem({
  taskItem,
  id,
  getDeletedTaskHandler,
  getEditedTaskHandler,
  toggleTaskHandler,
}) {
  const [isEditable, setIsEditable] = useState(false);
  const [newTaskName, setNewTaskName] = useState(taskItem.name);

  const deleteTask = (id) => {
    getDeletedTaskHandler(id);
  };

  const editTask = (id, newTaskName) => {
    setIsEditable(false);
    getEditedTaskHandler(id, newTaskName);
  };

  const toggleTask = (id) => {
    toggleTaskHandler(id);
  };

  return (
    <div className={styles.taskItemContainer}>
      <div className={styles.taskContainer}>
        {isEditable ? (
          <input
            className={styles.editInp}
            type="text"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
        ) : (
          <span>
            <span>
              <input className={styles.checkInp} type="checkbox" onChange={(e) => toggleTask(id)} />
            </span>
            <span className={styles.taskName}
              style={
                taskItem.iscompleted
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              {taskItem.name}
            </span>
          </span>
        )}
      </div>
      <div>
        {isEditable ? (
          <button
            className={styles.saveBtn}
            onClick={(e) => editTask(id, newTaskName)}
          >
            Save
          </button>
        ) : (
          <button
            className={styles.editBtn}
            onClick={(e) => setIsEditable(true)}
          >
            Edit
          </button>
        )}
        {isEditable ? (
          <button
            className={styles.backBtn}
            onClick={(e) => setIsEditable(false)}
          >
            Back
          </button>
        ) : (
          <button className={styles.deleteBtn} onClick={(e) => deleteTask(id)}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default TaskItem;
