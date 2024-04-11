import React,{useContext} from 'react'
import { Context1 } from '../App';

function CompC() {
    const name= useContext(Context1)
  return (
    <div>
    
      <h1>This is ...{name}</h1>
    </div>
  )
}

export default CompC;
