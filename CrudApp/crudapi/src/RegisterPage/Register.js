import React, { useState } from 'react'
import { Link, json } from 'react-router-dom';

function Register() {
    const [inpval,setInpval] = useState({
      name:"",
      email:"",
      password:"",
      gender:""
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
        const {name,email,password} = inpval;

        if(name === ''){
          alert("please name is required");
        }
        else if(email === '' || !email.includes('@')){
          alert("please email is required");
          alert("enter valid email address");
        }

        else if(password === '' || password.length < 5){
          alert("password is required")
          alert("password length greater than 5")
        }
        
        else{
            alert("data save succesfully")
            localStorage.setItem('user',JSON.stringify([...data,inpval]))
        }
     }

   
  return (
    <div>
        <section>
            <form>
              <h1 className=' text-2xl font-semibold'>Register</h1>
              <div>
                <label className=' text-start'>First Name</label><br/>
                <input type='text' onChange={getData} name='name' className='form-control outline-0 border-[1px] ' placeholder='Enter first name'/>
              </div>
              <div>
                <label>Email</label><br/>
                <input type='email' onChange={getData} name='email' className='form-control outline-0 border-[1px] ' placeholder='email'/>
              </div>
              <div>
                <label>Password</label><br/>
                <input type='password' onChange={getData} name='password' className='form-control outline-0 border-[1px] ' placeholder='Enter password'/>
              </div>
              <div>
                <label>Gender</label><br/>
                <label>Female</label>
                <input type='radio' onChange={getData} name='gender' className='form-control outline-0 border-[1px] ' placeholder='Enter first name'/>
                <label>Male</label>
                <input type='radio' onChange={getData}  name='gender'className='form-control outline-0 border-[1px] ' placeholder='Enter first name'/>
              </div>
              <div>
                <button type='submit' onClick={addData}>Register here</button>
              </div>
            </form>
            <p>Already Have an Account <span><Link to='/login'>Login</Link></span></p>
        </section>
    </div>
  )
}

export default Register
