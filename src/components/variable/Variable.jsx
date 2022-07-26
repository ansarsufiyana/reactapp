import React from 'react'
import {useState} from 'react'


function Variable() {
  const [data, setData] = useState(0)
  function updateData(){
    setData(data+1)
  }
      return (
        <div>
            <h1>{data}</h1>
            <button onClick={updateData}> on Click update data </button>
        </div>
      )
}

export default Variable