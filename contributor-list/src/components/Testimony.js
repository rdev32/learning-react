import React from 'react'
import './styles/testimonies.css'

const Testimony = (props) => {
    return (
        <article className='testimony-container'>
            <img className='testimony-image' src={require(`../images/pfp-${props.pic}.png`)} alt='pfp'/>
            <section className='testimony-text-container'>
                <h2 className='testimony-name'>{props.name}</h2>
                <h3 className='testimony-job'>{props.job}</h3>
                <p className='testimony-text'>{props.text}</p>
            </section>
        </article>
    )
}

export default Testimony