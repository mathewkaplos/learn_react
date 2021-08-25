import React from 'react'
import User from './User'

export default function UserList({users}) {
    const userElements=users.map(u=>{
     return   <User key={u.id} {...u}/>
    })
    return (
        <div>
        
    {userElements}

        </div>
    )
}
