import React, { useEffect, useState } from 'react'
import Screen from './components/Screen'
import Button from './components/Button'
import './style.css'

function App() {

	const [screenValue, setScreenValue] = useState('0')
	const [count, setCount] = useState(0)

	function addValue(val) {
		(screenValue == '0') ? setScreenValue(val) : setScreenValue(screenValue + val)
	}

	function result() {
		setScreenValue(count)
	}

	return (
		<article className='container'>
			<Screen value={screenValue}/>
			<div className='buttons-container'>
				<Button action={addValue}>1</Button>
				<Button action={addValue}>2</Button>
				<Button action={addValue}>3</Button>
				<Button type='op'>+</Button>

				<Button action={addValue}>4</Button>
				<Button action={addValue}>5</Button>
				<Button action={addValue}>6</Button>
				<Button type='op'>-</Button>

				<Button action={addValue}>7</Button>
				<Button action={addValue}>8</Button>
				<Button action={addValue}>9</Button>
				<Button type='op'>*</Button>

				<Button action={result} type='other-op'>=</Button>
				<Button action={addValue}>0</Button>
				<Button action={addValue} type='other-op'>.</Button>
				<Button type='op'>/</Button>
			</div>
			<Button action={() => setScreenValue('0')} type='cls'>CLEAR</Button>
		</article>
	)
}

export default App