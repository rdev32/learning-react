import React from 'react'
import Button from './Button'
import './styles/widget.css'

class Counter extends React.Component {

    constructor() {
        super()

        this.state = {
            countValue: 0
        }

        this.handleCount = this.handleCount.bind(this)
        this.resetCount = this.resetCount.bind(this)
    }

    handleCount() {
        this.setState(({ countValue }) => ({ countValue: countValue + 1}))
    }

    resetCount() {
        this.setState({ countValue: 0 })
    }

    render() {
        return (
            <>
                <div className='box'>
                    <span id='count' className='count'>
                        {this.state.countValue}
                    </span>
                </div>
                <div className='options'>
                    <Button 
                        label='Increase' 
                        isResetBtn={false}
                        handleClick={this.handleCount} 
                    />
                    <Button 
                        label='Reset' 
                        isResetBtn={true}
                        handleClick={this.resetCount} 
                    />
                </div>
            </>
        )
    }
}

export default Counter