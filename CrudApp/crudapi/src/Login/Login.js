import React, { useState } from 'react'
import '../Login/Login.css';
import { TfiEmail } from "react-icons/tfi";
import { CiLock } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
function Login() {
  

  const [inpval,setInpval] = useState({
    email:"",
    password:""
  })
  const [data,setData]  = useState([]);
  console.log(inpval);
  const getData = (e)=>{
      // console.log(e.target.value)
      const {name, value} = e.target;
      // console.log(name,value);
      setInpval(()=>{
        return{
          ...inpval,
          [name] : value
        }
      })

  }
   const addData = (e)=>{
      e.preventDefault();
      const getUser = localStorage.getItem('user');
      console.log(getUser);
      const {email,password} = inpval;

       if(email === '' || !email.includes('@')){
        alert("please email is required");
        alert("enter valid email address");
      }

      else if(password === '' || password.length < 5){
        alert("password is required")
        alert("password length greater than 5")
      }
      
      else{
          if(getUser && getUser.length){
            const userData = JSON.parse(getUser);
            // console.log(userData);
            const userLogin = userData.filter((el,index)=>{
              return el.email === email && el.password === password
            });
              // console.log(userLogin);
              if(userLogin.length === 0){
                alert("Invalid user")
              }
              else {
                // console.log("user login succesfully");
                localStorage.setItem("userlogin",JSON.stringify(getUser))
                alert("login succesfully")
              }
          }
      }
   }
  return (
    <div className='container'>
        
        <section className='login-form'>
            <form>
              <h1 className=' text-2xl font-semibold mt-5'>Login</h1>
                <div className='mt-5 flex gap-2 bg-white w-80 h-11 justify-center items-center rounded'>
                <span className='text-slate-500'><TfiEmail/></span>
                <input type='email' onChange={getData} name='email' className='form-control outline-0  w-72' placeholder='email'>
                 
                </input>
              </div>
              <div className='mt-5 flex gap-2 bg-white w-80 h-11 justify-center items-center rounded'>
                <span className='text-slate-500'><CiLock/></span>
                <input type='password' onChange={getData} name='password' className='form-control outline-0  w-72' placeholder='Enter password'/>
              </div>
              
              <div className='mt-5'>
                <button type='submit' onClick={addData} className=' border-[1px] w-40 p-1 text-xl font-semibold'>Login here</button>
              </div>
            </form>
          
        </section>
       
    </div>
  )
}

export default Login
