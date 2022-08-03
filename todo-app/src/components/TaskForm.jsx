import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai' 

const TaskForm = (props) => {
  const addTask = data => {

  }

  const handleInput = event => {

  }

  return (
    <form className='flex gap-2' autoComplete='off' onSubmit={addTask}>
        <label htmlFor="task-input" hidden>Add a new task</label>
        <input className='p-2 rounded outline-none' 
          type="text" 
          name="task-input" 
          id="task-input" 
          placeholder='Add a new task' 
          onChange={handleInput}
        />
        <button className='flex items-center justify-items-center justify-center' type="submit">
          <AiOutlinePlusCircle className='w-5 y-5 hover:opacity-80' />
        </button>
    </form>
  )
}

export default TaskForm