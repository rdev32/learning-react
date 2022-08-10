import React from 'react'
import Task from './components/Task'
import TaskSubmit from './components/TaskSubmit'
import './style.css'

const App = () => {

  return (
    <div className='container'>
      <TaskSubmit />
      <div className='task-list'>
        <Task text={'task'} completed/>
        <Task text={'task'} />
        <Task text={'task'} />
        <Task text={'task'} />
      </div>

    </div>
  )
}

export default App