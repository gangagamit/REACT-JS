import React,{useContext} from 'react'
import { data,data1 } from '../App'

function CompC() {
    const firstName= useContext(data)
    const lastname = useContext(data1)
  return (
    <div>
      <h1>my name is {firstName} {lastname} </h1>
    </div>
  )
}

export default CompC;
