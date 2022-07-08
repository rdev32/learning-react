import React from 'react'
import './styles/button.css'

function Button(props) {
  return (
    <div className='btn' onClick={() => props.action(props.children)}>
      {props.children}
    </div>
  )
}

export default Button