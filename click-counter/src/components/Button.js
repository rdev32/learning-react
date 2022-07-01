import React, { useState } from 'react'

const Button = ({color, label, isclicked}) => {

    const [btnColour, setBtnColour] = useState(`dark${color}`)

    const style = {
        padding: '5px',
        fontSize: '1.5em',
        borderRadius: '10px',
        border: '2pt solid #ddd',
        background: btnColour,
        textAlign: 'center',
        userSelect: 'none',
        width: '100%'
    }


    return (
        <span style={style} 
        onMouseEnter={() => setBtnColour(color)} 
        onMouseLeave={() => setBtnColour(`dark${color}`)} 
        onClick={isclicked}>
            { label }
        </span>
    )
}

export default Button