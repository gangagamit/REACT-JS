import React from 'react'

function Card(props) {
  return (
    <div>
      <div className='max-w-sm shadow overflow-hidden rounded'>
            <img src={props.image} alt='image' className='rounded'></img>
            <div className='part-1  font-mono font-bold text-xl'>
                {props.title}
            </div>
            <div className='part-2'>{props.descri}</div>
      </div>
    </div>
  )
}

export default Card
