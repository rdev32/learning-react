import React from 'react'

const TaskSubmit = () => {
  return (
    <form className='form'>
        <input type='text' className='input' placeholder='Add a new task' />
        <span className='btn-input' >Add</span>
    </form>
  )
}

export default TaskSubmit