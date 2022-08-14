import React from 'react'
import User from './components/User'
import './main.css'

class App extends React.Component {

constructor() {
    super()

    this.state = {
        data: []
    }
}

componentDidMount() {
    this.fetchUsers(5)
}

async fetchUsers(len) {
    console.log('Fetching users...')

    for (let i = 0; i < len; i++) {
        const req = await fetch('https://randomuser.me/api/')
        const data = await req.json()
        
        this.setState({ data: [...this.state.data, {
          name: data.results[0].name.first + ' ' + data.results[0].name.last,
          pic: data.results[0].picture.large,
          id: data.results[0].login.uuid,
          location: data.results[0].location.timezone.description
        }]})
    }  
}

render() {
    const { data } = this.state

    return (
        <>
            <header>
                <h1>This are our Contributors!</h1>
            </header>
            <main>
                {
                    data.map(item => {
                        return <User key={item.id} name={item.name} pic={item.pic} location={item.location} />
                    })
                }
            </main>
            <footer>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus consequuntur minus nemo consectetur dicta eos repellat delectus, nulla debitis praesentium ad dolorem! Optio sequi consectetur, facere error repudiandae numquam distinctio.</p>
            </footer>
        </>
    )
}
}

export default App