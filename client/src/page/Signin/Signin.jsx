import React from 'react'

const Signin = () => {
  return <form className="bg-gray-300 flex flex-col py-12 px-8 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10">
    <h1 className="text-3xl font-bold text-center">Sign in</h1>
    <input type="text" name="username" id="username" placeholder='username or email address' className="text-xl py-2 rounded-full px-4" required />
    <input type="password" name="password" id="password" placeholder='passowrd' className="text-xl py-2 rounded-full px-4" required/>

    <button className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white">Sign in</button>

    <p className="text-center text-xl">Don't have an account?</p>
    <input type="text" name="username" id="username" placeholder='username' className="text-xl py-2 rounded-full px-4"  required/>
    <input type="email" name="email" id="email" placeholder='email address' className="text-xl py-2 rounded-full px-4"  required/>
    <input type="password" name="password" id="password" placeholder='passowrd' className="text-xl py-2 rounded-full px-4" required/>
    <button className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white" type='submit'>Sign Up</button>


  </form>
}

export default Signin;
