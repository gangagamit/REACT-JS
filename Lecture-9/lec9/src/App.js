
import './App.css';
import One from './TernaryOp/One';
import Two from './TernaryOp/Two';
function App() {
  return (
    <div className="App">
      {(true)?<One/>:<Two/>}
      <></>
    </div>
  );
}

export default App;
