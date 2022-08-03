import React, { useState } from 'react'

import TaskForm from './components/TaskForm'
import Task from './components/Task'
import './style.css'

const App = () => {

    const [tasks, setTasks] = useState([])

    return (
        <article className='flex flex-col gap-2 p-5 max-w-sm bg-cyan-100 rounded'>
            <TaskForm input={setTasks}/>

            <div className='tasks-container'>
                {tasks.map((item, key) => {
                    return <Task content={item[key].data}/>
                })}
                <Task content='gaaa'/>
            </div>
        </article>
    )
}

export default App