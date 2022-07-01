import React, { useState } from 'react'
import Button from './components/Button'
import Grid from './components/Grid'
import Screen from './components/Screen'

function App() {

	const [screenValue, setScreenValue] = useState(0)


	return (
		<div className='container'>
			<h1>Simple Calculator App</h1>
			<article>
				<Screen value={screenValue} ifChange={() => setScreenValue(screenValue)}/>
				<Grid />
				<Button type='clear' isClicked={() => setScreenValue(0)}/>
			</article>
		</div>
	)
}

export default App