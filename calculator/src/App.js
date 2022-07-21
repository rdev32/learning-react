import React from 'react'
import Button from './components/Button'
import Clear from './components/buttonClear'
import Screen from './components/Screen'
import './style.css'

import { useState } from 'react'
import { evaluate } from 'mathjs'

// TODO: Prevent Inifnity division
const App = () => {

  const [input, setInput] = useState('')

  const calculateResult = () => {
    if (input) setInput(evaluate(input)) 
    else console.log('no hay numeros para operar')
  }

  const addInput = value => setInput(input + value)

  return (
    <article className='container'>
        <Screen input={input} />
        <div className='buttons-container'>
            <Button handleClick={addInput}>1</Button>
            <Button handleClick={addInput}>2</Button>
            <Button handleClick={addInput}>3</Button>
            <Button handleClick={addInput}>+</Button>

            <Button handleClick={addInput}>4</Button>
            <Button handleClick={addInput}>5</Button>
            <Button handleClick={addInput}>6</Button>
            <Button handleClick={addInput}>-</Button>

            <Button handleClick={addInput}>7</Button>
            <Button handleClick={addInput}>8</Button>
            <Button handleClick={addInput}>9</Button>
            <Button handleClick={addInput}>*</Button>

            <Button handleClick={calculateResult}>=</Button>
            <Button handleClick={addInput}>0</Button>
            <Button handleClick={addInput}>.</Button>
            <Button handleClick={addInput}>/</Button>
        </div>
        <Clear handleClear={() => setInput('')}>CLEAR</Clear>
    </article>
  )
}

export default App