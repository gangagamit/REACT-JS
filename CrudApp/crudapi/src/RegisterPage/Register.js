import React, { useState } from 'react'
import { Link, json } from 'react-router-dom';
import '../RegisterPage/Registerstyle.css';
import { CiUser } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { CiLock } from "react-icons/ci";
import Navbar from '../Navbar/Navbar';
function Register() {
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    password: "",
    gender: ""
  })
  const [data, setData] = useState([]);
  console.log(inpval);
  const getData = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    // console.log(name,value);
    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })

  }
  const addData = (e) => {
    e.preventDefault();
    const { name, email, password } = inpval;

    if (name === '') {
      alert("please name is required");
    }
    else if (email === '' || !email.includes('@')) {
      alert("please email is required");
      alert("enter valid email address");
    }

    else if (password === '' || password.length < 5) {
      alert("password is required")
      alert("password length greater than 5")
    }

    else {
      alert("data save succesfully")
      localStorage.setItem('user', JSON.stringify([...data, inpval]))
    }
  }


  return (
    <>
      <Navbar/>
    <div className=' container'>
      <section className=' register-form'>
        <form>
          <h1 className=' text-2xl font-semibold text-green-500'>Register</h1>
          <div className='register-f mt-5 flex gap-2  w-80 h-11 justify-center items-center rounded-2xl p-1'>

            <span className=' text-slate-300'><CiUser /></span>
            <input type='text' onChange={getData} name='name' className='form-control outline-0 w-80' placeholder='Enter first name' />

          </div>
          <div className=' register-e mt-5 flex gap-2  w-80 h-11 justify-center items-center rounded-2xl p-1'>

            <span className=' text-slate-300'><TfiEmail /></span>
            <input type='email' onChange={getData} name='email' className='form-control outline-0  w-80 ' placeholder='email' />

          </div>
          <div className=' register-p mt-5 flex gap-2 bg-white w-80 h-11 justify-center items-center rounded-2xl p-1'>
            <span><CiLock /></span>
            <input type='password' onChange={getData} name='password' className='form-control outline-0 w-80' placeholder='Enter password' />
          </div>
          <div>
            <label><h1 className='text-start  font-semibold mt-2 text-slate-400'>Gender</h1></label><br />
            <div className='text-start'>
              <input type='radio' onChange={getData} name='gender' className='form-control outline-0 border-[1px] ' />
              <label className=' font-semibold text-slate-400'>Male</label>
              <input type='radio' onChange={getData} name='gender' className='form-control outline-0 border-[1px] '/>
              <label className=' font-semibold text-slate-400'>Female</label>
            </div>
          </div>
          <div className=' mt-2 w-80 h-11 bg-green-400 rounded-2xl p-1'>
            <button type='submit' onClick={addData} className='font-semibold bg-green-400 text-center'>Register here</button>
          </div>
          <p className=' font-semibold text-slate-400'>Already Have an Account?<span><Link to='/login' className=' text-green-400 text-lg'>Login</Link></span></p>
        </form>
      </section>
      
    </div>
    </>
  )
}

export default Register
