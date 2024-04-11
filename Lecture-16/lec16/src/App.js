import { createContext } from 'react';
import './App.css';
import CompA from './UseContext/CompA';
function App() {
  const Context1 = createContext()
  return (
    <div className="App">
      <Context1.Provider value="abc">
      <CompA/>

      </Context1.Provider>
    </div>
  );
}
export  {Context1}
export default App;
