import Counter from './components/Counter'
import './styles.css'

const App = () => {
	return (
		<div className='container'>
			<h1 className='logo'>Click counter</h1>
			<Counter />
		</div>
	)
}

export default App