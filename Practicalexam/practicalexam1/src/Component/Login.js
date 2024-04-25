import React from 'react'

function Login() {
  return (
    <div className='flex justify-center items-center mt-5'>
          <div className='container mx-auto'>
              <span><i class="fa-brands fa-github fa-3x"></i></span>
              <p className='text-2xl font-thin '>Sign in to GitHub</p>
              <form className="max-w-sm mx-auto border bg-gray-50 p-6 rounded-md mt-2">
              <div class="mb-5 text-start">
                <label for="email" className="block mb-2 text-md  text-gray-600 dark:text-white">Username or email address</label>
                <input type="email" id="email" className="bg-white-50 border w-80 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>

              <div class="mb-5 text-start">
                <div className='flex justify-between'>

                <label for="password" className="block mb-2 text-md  text-gray-600 dark:text-white">Password</label>
                <label for="password" className="block mb-2 text-md  text-blue-600 dark:text-white">
                Forgot password?</label>
                </div>
  
                <input type="password" id="password" className="bg-white-50 border w-80 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div>
          <button className='bg-green-700 text-white w-72 p-2 rounded-md'>Sign in</button>
              </div>
              </form>
          <div className='max-w-sm mx-auto border mt-5 rounded-md p-5'>
              <p className='text-blue-600 underline'>Sign in with a passkey</p>
              <p>New to GitHub?<a href='#' className='text-blue-600'>Create an account</a></p>
          </div>
          </div>
    </div>
  )
}

export default Login
