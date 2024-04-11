import React from 'react'
import img from '../Image/Image-2.jpg';
function List() {
  return (
    <div className='container'>
        <nav>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact us</a></li>
        <li><a href='#'>More Details</a></li>
      </ul>
        </nav>
        <img src= {img} alt='image' height={400} width={800}></img>
    </div>
  )
}

export default List
