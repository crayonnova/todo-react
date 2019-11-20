import React from 'react'

export const Input = props => {
    return ( 
        <input 
            type={props.type} 
            placeholder={props.placeholder}
            onChange={props.action}
            onClick={props.submit} 
        />
    )
}