import React from 'react'

function Card(props) {
  return (
    <div>
      <div className='max-w-sm rounded shadow overflow-hidden'>
        <img src={props.image}></img>
        <h1>{props.Name}</h1>
        <div>
            <p>{props.descri}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
