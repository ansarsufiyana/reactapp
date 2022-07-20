import React from 'react'
import './User.css'

function User() {
  function apple(){
    alert('from button')
  }

  return (
    <div>
        <h1 >hello from user</h1>
        <button onClick={apple}>Click me from function</button>
        < br />
        <button onClick={() => alert('here') }>arrow function here</button>
    </div>
  )
}

export default User
