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
            <form className=' login'>
              <h1 className='  text-2xl font-semibold mt-5 text-green-500'>Login</h1>
                <div className=' login-e mt-5 flex gap-2  w-80 h-11 justify-center items-center rounded-2xl'>
                <span className='text-slate-500'><TfiEmail/></span>
                <input type='email' onChange={getData} name='email' className='form-control outline-0  w-80' placeholder='email'>
                 
                </input>  
              </div>
              <div className=' login-p mt-5 flex gap-2  w-80 h-11 justify-center items-center rounded-2xl'>
                <span className='text-slate-500'><CiLock/></span>
                <input type='password' onChange={getData} name='password' className='form-control outline-0  w-80' placeholder='Enter password'/>
              </div>
              
              <div className='mt-5'>
                <button type='submit' onClick={addData} className=' text-white  w-40 p-1 text-lg font-semibold bg-green-500 rounded-2xl'>Login here</button>
              </div>
            </form>
          
        </section>
       
    </div>
  )
}

export default Login
