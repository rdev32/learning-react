import ClickWidget from './components/ClickWidget'
import './styles.css'

const App = () => {
	return (
		<div className='container'>
			<h1 className='logo'>Click counter</h1>
			<ClickWidget />
		</div>
	)
}

export default App