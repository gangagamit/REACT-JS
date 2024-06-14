import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from './component/Register';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
          <Routes>
              <Route path='/' element={<Register/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
