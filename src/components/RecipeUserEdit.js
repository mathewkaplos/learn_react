import React from 'react'

export default function RecipeUserEdit(props) {

const
 {user,
handleUserChange,
handleUserDelete
}=props

    function handleChange(changes) {
        handleUserChange(user.id, { ...user, ...changes })
      }
    return (
        <>
            <input
             type="text"
              name="name" 
              id="name"
               value={user.name}
               onChange={(e)=>handleChange({name:e.target.value})}
               />
     <button
        className="btn btn--danger"
        onClick={() => handleUserDelete(user.id)}
      >
        &times;
      </button>
        </>
    )
}
