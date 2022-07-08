import React, { useEffect, useState } from 'react'
import Screen from './components/Screen'
import Button from './components/Button'
import './style.css'

function App() {

	const [screenValue, setScreenValue] = useState('0')
	const [count, setCount] = useState(0)

	useEffect(() => window.addEventListener('keydown', (e) => console.log(e.key)))

	function addValue(val) {
		(screenValue == '0') ? setScreenValue(val) : setScreenValue(screenValue + val);
		(screenValue.includes('.')) ? setCount(parseFloat(screenValue)) : setCount(parseInt(screenValue))
	}

	function calculateInt(val, operator) {
		if (operator == '+') return parseInt(count) + parseInt(val)
		if (operator == '-') return parseInt(count) - parseInt(val)
		if (operator == '*') return parseInt(count) * parseInt(val)
		if (operator == '/') return parseInt(count) / parseInt(val)
	}

	function calculateFloat(val, operator) {
		if (operator == '+') return parseFloat(count) + parseFloat(val)
		if (operator == '-') return parseFloat(count) - parseFloat(val)
		if (operator == '*') return parseFloat(count) * parseFloat(val)
		if (operator == '/') return parseFloat(count) / parseFloat(val)
	}

	function calculate(val, operator) {
		if (Number.isInteger()) {
			setCount(calculateInt(val, operator))
			setScreenValue('0')
		} else {
			setCount(calculateFloat(val, operator))
			setScreenValue('0')
		}
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
				<Button action={calculate} value={count}>+</Button>

				<Button action={addValue}>4</Button>
				<Button action={addValue}>5</Button>
				<Button action={addValue}>6</Button>
				<Button action={calculate} value={count}>-</Button>

				<Button action={addValue}>7</Button>
				<Button action={addValue}>8</Button>
				<Button action={addValue}>9</Button>
				<Button action={calculate} value={count}>*</Button>

				<Button action={result}>=</Button>
				<Button action={addValue}>0</Button>
				<Button action={addValue}>.</Button>
				<Button action={calculate} value={count}>/</Button>
			</div>
			<Button action={() => setScreenValue('0')}>CLEAR</Button>
		</article>
	)
}

export default App