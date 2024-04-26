import React from 'react'
import Data from '../Component/Data';
import Card from '../Component/Card';
function Home({}) {
  return (
    <div>
           <div className='text-3xl font-bold text-red-600'>
       
        <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", padding: "30px" }}>
        {Data?.map((cvalue, ind, arr) => {
          return <Card key={ind} id={cvalue.id} name={cvalue.name}  age={cvalue.age} img={cvalue.img} />
        })}
      </div>
    </div>
    </div>
  )
}

export default Home
