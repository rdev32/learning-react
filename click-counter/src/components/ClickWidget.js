import React, { useState } from 'react'
import Button from './Button'
import './styles/widget.css'

const ClickWidget = () => {

    const [countValue, setCountValue] = useState(0)

  return (
    <article className='widget'>
        <div className='box'>
            <span id='count' className='count'>{countValue}</span>
        </div>
        <div className='options'>
            <Button 
                label='Increase' 
                color='green' 
                isclicked={() => setCountValue(countValue + 1)} 
            />
            <Button 
                label='Reset' 
                color='red' 
                isclicked={() => setCountValue(countValue - countValue)} 
            />
        </div>
    </article>
  )
}

export default ClickWidget