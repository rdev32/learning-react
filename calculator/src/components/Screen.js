import React from 'react'
import './styles/screen.css'

//TODO: Refresh the screen to the right if overflows

const Screen = ({ input }) => {
  return (
    <div className='screen'>
        {input}
    </div>
  )
}

export default Screen