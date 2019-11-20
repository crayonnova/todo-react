import React from 'react'
import {Task} from './Task.component'
export const TaskList = props => { 
    return ( 
        <ul className='list'>
            {
                props.tasks.map( (task,index) =>{
                    return (<Task key={index} task={task}/>)
                })
            }
        </ul>
    )
}
