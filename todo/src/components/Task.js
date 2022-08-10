import React from 'react'
import './styles/btn.css'

const Task = ({ text, completed }) => {
  return (
    <div className={completed ? 'task-item done' : 'task-item'}>
        <p className={completed ? 'content done' : 'content'}>{ text }</p>
        <span className='ico'>&#10006;</span>
    </div>
  )
}

export default Task