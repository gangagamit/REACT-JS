
import './App.css';
import React,{useRef} from 'react'
function App() {
  const ref=useRef();
  console.log(ref,"ref");

  const URef = ()=>{
    ref.current.focus();
    ref.current.style.color="red";
    ref.current.style.backgroundColor="yellow";
  }
  return (
    <div className="App">
        <input type="text" ref={ref}/>
        <button onClick={URef}>click me!!</button>
    </div>
  );
}

export default App;
