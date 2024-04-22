
import './App.css';

import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={  <Contact/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
