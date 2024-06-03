
import './App.css';
import Home from './Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './RegisterPage/Register';
import Edit from './EditPage/Edit';
import Login from './Login/Login';
import Create from './Create/Create';
import UserDetail from './UserDetails/UserDetail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/userdetails' element={<UserDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
