import React from 'react'
import './styles/button.css'

class Button extends React.Component {
    render() {
        return (
            <button className={this.props.isResetBtn ? 'reset' : 'click'} 
                onClick={this.props.handleClick}>
                { this.props.label }
            </button>
        )
    }
}

export default Button