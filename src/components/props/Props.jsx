import React from 'react'
import Students from './Students'
import { useState } from 'react'

function Props() {
    const [name, setName] =useState(['ansar','ali','jam'])
  return (
    <div>
      <h1>Props in react</h1>
      <Students name ={name[0]}  email = 'ansarali@gmail.com' other={{address:"hunza",mobile:'0344'}}/>
      <Students name={name[1]}  email = 'peter@gmail.com' other={{address:"aliabad",mobile:'0311'}}/>
      <Students name={name[2]}  email = 'mubeen@gmail.com' other={{address:"altit",mobile:'03555'}}/>
      <button onClick={() => {setName(['devil','kar','kako'])}}>update name</button>
    </div>
  )
}

export default Props
