import React from 'react'
import {UserCard} from './UserCard.component'
export const UserList = props => {
    return (
            <ul>
                {
                    props.users.map( user => {
                        return (<UserCard key={user.id} user={user} />)
                    })
                }
            </ul>
            
    )
}