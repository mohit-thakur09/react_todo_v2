import React, { useState } from 'react';
import styles from './styles/createTask.module.css'

function CreateTask({getTaskHandler}) {
    const [taskName, setTaskName] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        getTaskHandler(taskName)
        setTaskName('')
    }

  return (
    <div>
        <form onSubmit={e=>handleSubmit(e)}>
            <input className={styles.taskInp} type='text' placeholder='Enter the task...' value={taskName} onChange={e=>setTaskName(e.target.value)} />
            <button className={styles.addTaskBtn} type='submit'>Add Task</button>
        </form>
    </div>
  )
}

export default CreateTask