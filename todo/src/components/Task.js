import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './styles/task.css'

const Task = ({ id, text, completed, completeTask, delTask }) => {
  return (
    <div className={completed ? 'item done' : 'item'}>
        <p className='content' onClick={() => completeTask(id)}>
          { text }
        </p>
        <span className='icon' onClick={() => delTask(id)}>
          <AiOutlineCloseCircle />
        </span>
    </div>
  )
}

export default Task