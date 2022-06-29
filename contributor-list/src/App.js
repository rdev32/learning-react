import React from 'react'
import Testimony from './components/Testimony'
import './main.css'

const App = () => {
    const info = [
        {
            name: 'Cristiano Meza',
            job: 'Software Engineer',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati repellendus eligendi perspiciatis sed minima natus porro laudantium saepe magni numquam ullam qui a, necessitatibus mollitia, deleniti voluptatibus maxime dolores distinctio.'
        },
        {
            name: 'Gina Alva',
            job: 'Music Producer',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati repellendus eligendi perspiciatis sed minima natus porro laudantium saepe magni numquam ullam qui a, necessitatibus mollitia, deleniti voluptatibus maxime dolores distinctio.'
        },
        {
            name: 'Aldo Echenique',
            job: 'Art Designer',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati repellendus eligendi perspiciatis sed minima natus porro laudantium saepe magni numquam ullam qui a, necessitatibus mollitia, deleniti voluptatibus maxime dolores distinctio.'
        }
    ]
    
    return (
        <div className='App'>
            <h1 className='title'>Our contirbutors</h1>
            {info.map((item, index) => {
                return <Testimony name={item.name} job={item.job} text={item.text} pic={index}/>
            })}
        </div>
    )
}

export default App