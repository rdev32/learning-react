import React from 'react'
import { ImCross } from 'react-icons/im'

const Task = (props) => {

    const deleteTask = () => {

    }

    return (
        <div className='flex justify-items-center justify-between w-full bg-blue-400 p-3 rounded'>
            <p>{props.content}</p>
            <span className='flex items-center justify-items-center justify-center'>
                <ImCross className='w-5 y-5 hover:opacity-80'/>
            </span>
        </div>
    )
}

export default Task