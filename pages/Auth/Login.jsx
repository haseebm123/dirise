import React from 'react';
import './style.css'

const LoginPage = () => {
  return (
    <div className="flex  h-screen  py-52  container bg-backgroundColor">
      {/* Left side - Logo */}
      <div className="flex flex-col  w-1/2 ">
        <img src="/assets/Dirise_logo.svg" alt="Logo" className='h-full' />
      </div>

      {/* Right side - Login Form */}
      <div className="w-1/2">
        <div className="w-full">
            <h1 className='2xl:text-7xl'>Welcome Back ABCD !</h1>
          <form className='mt-10'>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Adress
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border input-custom rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border input-custom rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="text-textColor hover:text-blue-700 text-sm text-center mx-auto"
              >
               i forgot my password
              </a>
            
            </div>
           <h6 className='mt-4 mx-auto text-center'> Or</h6>
           <div className='flex flex-col justify-between items-center'>
            <div>
                <span>Login with Google</span>
            </div>
            <div>
                <span>Login with Facebook</span>
            </div>
           </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;