import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {
  

  const history = useNavigate()
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
                console.log("user login succesfully");
                history('/userdetails');
              }
          }
      }
   }
  return (
    <div>
        
        <section>
            <form>
              <h1 className=' text-2xl font-semibold'>Login</h1>
                <div>
                
                <input type='email' onChange={getData} name='email' className='form-control outline-0 border-[1px] ' placeholder='email'/>
              </div>
              <div>
                <label>Password</label><br/>
                <input type='password' onChange={getData} name='password' className='form-control outline-0 border-[1px] ' placeholder='Enter password'/>
              </div>
              
              <div>
                <button type='submit' onClick={addData}>Login here</button>
              </div>
            </form>
            <p>Already Have an Account <span>Login</span></p>
        </section>
       
    </div>
  )
}

export default Login
