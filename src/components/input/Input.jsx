import React from 'react'

function Input() {
  function getData (val){
    console.warn(val)
  }
  return (
    <div>
        <div> 
            <h1>Get the value !</h1>
            <input style={{margin:20}} type="text" onChange={getData} />
        </div>
    </div>
  )
}

export default Input