import React from 'react'

export const SearchBox = (props) => {
    return (
        <input type='text' onChange={props.text}></input>
    )
}

export const Button = (props) =>{
    return (
        <button>{props.text}</button>
    )
}