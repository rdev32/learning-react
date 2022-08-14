import React from 'react'
import './styles/user.css'

class User extends React.Component {
    render() {
        return (
            <section className='card'>
                <img 
                    className='image' 
                    src={this.props.pic} 
                    alt='random photo from user' 
                />
                <article className='text'>
                    <h2 className='name'>
                        {this.props.name}
                    </h2>
                    <h3 className='location'>
                        {this.props.location}
                    </h3>
                    <p className='description'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus consequuntur minus nemo consectetur dicta eos repellat delectus, nulla debitis praesentium ad dolorem! Optio sequi consectetur, facere error repudiandae numquam distinctio.
Aperiam, voluptatum rem nesciunt a officia, fugiat, fuga enim distinctio non quia placeat itaque deserunt doloribus autem dicta. Exercitationem odit saepe provident illo odio eveniet quis repudiandae quasi omnis? Quisquam.
                    </p>
                </article>
            </section>
        )
    }
}

export default User