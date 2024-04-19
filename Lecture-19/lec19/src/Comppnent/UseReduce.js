import React from 'react'
import { useReducer } from 'react';

let initial = 0;

const  reducer = (state,action)=>{
    console.log(state,action,"state,action");
    if(action.type == "increment")
    {
        return state+1
    }
    if(action.type =="decrement"){
        return state-1
    }
    return state;
}
function UseReduce() {
    const [state,dispatch] = useReducer(reducer,initial)
  return (
    <div>
        {state}
        <br/>
        <button onClick={()=>{dispatch({type:"increment"})}}>increment</button>
        <button onClick={()=>{dispatch({type:"decrement"})}}>decrement</button>
    </div>
  );
}
export default UseReduce
