import React from 'react'
import './styles/screen.css'

function Screen(props) {
  return (
    <div className='screen'>
      {props.value}
    </div>
  )
}

export default Screen