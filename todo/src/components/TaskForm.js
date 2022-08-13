import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './styles/form.css'

const TaskForm = (props) => {

  const [input, setInput] = useState('')

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    const task = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(task)
    e.target.reset()
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
        <input 
          className='input' 
          type='text' 
          placeholder='Add a new task'
          onChange={handleChange}
        />

        <button className='btn' type='submit'>
          Add
        </button>
    </form>
  )
}

export default TaskForm