import React,{useEffect,useState} from 'react'
function Useeffect() {
    const [plus,setPlus] = useState(0)
    const [minus,setMinus] = useState(0)

    // useEffect(()=>{
    //     console.log("useeffect run evry render")
    // });

    useEffect(()=>{
        console.log("useeffect run refrece a page 1 time")
    },[]);

    useEffect(()=>{
        console.log("useeffect run on onclick or any dependency")
    },[plus]);

    const incre = ()=>{
        setPlus(plus+1)
    }

    const decre = ()=>{
        setMinus(minus-1)
    }
  return (
    <div className='flex justify-center gap-5'>
        <h1>useEffect</h1>
      <h3>{plus}</h3>
      <button onClick={incre}>+</button>
      <h4>{minus}</h4>
      <button onClick={decre}>-</button>
    </div>
  )
}

export default Useeffect

