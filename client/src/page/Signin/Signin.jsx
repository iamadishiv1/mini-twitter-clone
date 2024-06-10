import React, { useState } from 'react'
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../../redux/userS';

import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post('http://localhost:8000/api/auth/signin', { username, password });
      dispatch(loginSuccess(res.data));
      // console.log('res', res.data);
      navigate('/');
    }
    catch (err) {
      dispatch(loginFailure());
      // console.log(err);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post('http://localhost:8000/api/auth/signup', {username, email, password});
      dispatch(loginSuccess(res.data));
      navigate('/');
    }
    catch (err) {
      dispatch(loginFailure());
    }
  };

  return <form className="bg-gray-300 flex flex-col py-12 px-8 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10">
    <h1 className="text-3xl font-bold text-center">Sign in</h1>
    <input
      onChange={(e) => setUsername(e.target.value)}
      type="text"
      name="username"
      id="username"
      placeholder='username or email address'
      className="text-xl py-2 rounded-full px-4"
    />
    <input
      onChange={(e) => setPassword(e.target.value)}
      type="password"
      name="password"
      id="password"
      placeholder='passowrd'
      className="text-xl py-2 rounded-full px-4"
    />

    <button className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white" onClick={handleLogin}>
      Sign in
    </button>

    <p className="text-center text-xl">Don't have an account?</p>
    <input
      onChange={(e) => setUsername(e.target.value)}
      type="text"
      name="username"
      id="username"
      placeholder='username'
      className="text-xl py-2 rounded-full px-4"
    />
    <input
      onChange={(e) => setEmail(e.target.value)}
      type="email"
      name="email"
      id="email"
      placeholder='email address'
      className="text-xl py-2 rounded-full px-4"
      required
    />
    <input
      onChange={(e) => setPassword(e.target.value)}
      type="password"
      name="password"
      id="password"
      placeholder='passowrd'
      className="text-xl py-2 rounded-full px-4"
    />
    <button className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white" type='submit' onClick={handleSignup}>
      Sign Up
    </button>


  </form>
}

export default Signin;
