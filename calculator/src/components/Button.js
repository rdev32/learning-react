import React from 'react'
import './styles/button.css'

function Button(props) {
  const operatorBtn = <div className={`btn ${props.type}`} onClick={ () => props.action(props.children) } > {props.children} </div>
  const btn = <div className='btn' onClick={ () => props.action(props.children) } > {props.children} </div>
  
  return (props.type) ? operatorBtn : btn
}

export default Button