import React,{useState} from 'react'
function Usestate() {
    const[count,setCount]=useState(1)
    const myCount=()=>{
        setCount(count+1)
    }
    const myFun = ()=>{
        setCount(count-1)
    }
  return (
    <div className='Box'>
      <div className='box-1'>
        <button onClick={myCount}>Plus</button>
        </div>
        <h3 className='count'>{count}</h3>
        <div className='box-2'>
        <h3></h3>
        <button onClick={myFun}>minus</button>
        </div>
    </div>
  );
}

export default Usestate
