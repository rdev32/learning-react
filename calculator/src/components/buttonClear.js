import React from 'react'
import './styles/button.css'

const buttonClear = (props) => {
  return (
    <button className='btn cls' onClick={props.handleClear}>
        {props.children}
    </button>
  )
}

export default buttonClear