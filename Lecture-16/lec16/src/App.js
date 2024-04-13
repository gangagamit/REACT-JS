
import './App.css';
import CompA from './UseContext/CompA';
import { createContext } from 'react';
const data = createContext();
const data1 = createContext();
function App() {
  const name = "Ganga"
  const cast = "Gamit"
  return (
    <div className="App">
      <data.Provider value={name}>
      <data1.Provider value={cast}>

     <CompA/>
      </data1.Provider>
      </data.Provider>
    </div>
  );
}
export {data,data1}
export default App;

