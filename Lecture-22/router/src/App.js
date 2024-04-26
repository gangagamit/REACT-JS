
import './App.css';
import Dashbord from './Component/Dashbord';
import About from './Component/About';
import Demo from './Component/Demo';
import Feature from './Component/Feature';
import Home from './Component/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from './Navbar/Nav';
import './Navbar.css';
import Navigaionerr from './Component/Navigaionerr';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Nav/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/dashbord' element={<Dashbord/>}/>
              <Route path='/demo' element={<Demo/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/feature' element={<Feature/>}/>
              <Route path='*' element={<Navigaionerr/>}/>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
