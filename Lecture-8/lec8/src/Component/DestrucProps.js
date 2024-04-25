import React from 'react'

function DestrucProps({img,name,descr}) {
  return (
    <div>
      <img src={img} alt='image'></img>
      <h1>{name}</h1>
      <div>
        <p>{descr}</p>
      </div>
    </div>
  )
}

export default DestrucProps
