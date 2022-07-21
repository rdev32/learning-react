import React from 'react'
import './styles/button.css'

const Button = (props) => {

    function isOperator(value) {
        return isNaN(value) && (value != '.') && (value != '=')
    }

  return (
    <button 
    className={`btn ${isOperator(props.children) ? 'op' : null}`}
    onClick={() => props.handleClick(props.children)} >
        {props.children}
    </button>
  )
}

export default Button   