import React, { useState } from 'react'
import Task from './Task'
import TaskForm from './TaskForm'
import './styles/list.css'

const TaskList = () => {
  const [tasks, setTasks] = useState([])

  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim()
      const updatedTasks = [task, ...tasks]
      setTasks(updatedTasks)
    }
  }

  const completeTask = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id == id) task.completed = !task.completed
      return task
    })
    setTasks(updatedTasks)
  }

  const delTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
  }

  return (
    <article className='container'>
      <TaskForm onSubmit={addTask} />
      <>
        {
          tasks.map((item) => {
            return <Task
              key={item.id} // important to tell react each item key
              id={item.id}
              text={item.text}
              completed={item.completed}
              completeTask={completeTask}
              delTask={delTask}
            />
          })
        }
      </>
    </article>
  )
}

export default TaskList