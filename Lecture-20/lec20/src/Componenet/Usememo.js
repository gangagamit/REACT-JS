import React,{useState,useMemo} from 'react'
function Usememo() {

    const[plus,setPlus]= useState(0)
    const[Minus,setMinus] = useState(1)

    const Add = useMemo(function Count(){
        console.log("hello");
        return Minus + 5;
    },[Minus]);
  return (
    <div>
      {Add}
      <h1>{plus}</h1>
      <button onClick={()=>{
        setPlus(plus+1)
      }}> onClick</button>
      <h1>{Minus}</h1>
      <button onClick={()=>{
        setMinus(Minus-5)
      }}>onminus</button>
    </div>
  )
}

export default Usememo
