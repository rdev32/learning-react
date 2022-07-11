import React, { useEffect, useRef } from 'react'
import './styles/screen.css'

const Screen = (props) => {

  const moveToRight = useRef(null)
  
  useEffect(() => {
    moveToRight.current.scrollIntoView({ behavior: 'smooth' })
  })

  return (
    <div className='screen' ref={moveToRight}>
      {props.value}
    </div>
  )
}

export default Screen