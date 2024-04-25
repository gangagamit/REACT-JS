
import './App.css';
import Home from './Component/Home';
import Data from './Component/Data';
import './Style.css';
import Nav from './Navbar/Nav';
import About  from './Component/About';
import Contact from './Component/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
