import React, { useEffect, useState } from 'react'
import { FaBootstrap } from "react-icons/fa";
import { Input } from '../ui';
import { useDispatch, useSelector } from 'react-redux';
import AuthService from '../service/auth';
import { signUserFailure, signUserStart, signUserSuccess } from '../slice/auth';
import { ValidationError } from './'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {isLoading, isLogin} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // console.log(isLoading);
  // console.log(dispatch);

  const loginHandle = async (e) => {
    e.preventDefault()
    dispatch(signUserStart())
    const user = {email, password}
    try {
      const response = await AuthService.userLogin(user)
      navigate('/')
      // console.log(response);
      dispatch(signUserSuccess(response.user))
    }
    catch (error) {
      // console.log(error.response?.data.errors)
      dispatch(signUserFailure(error.response?.data.errors))
    }
  }

  useEffect(() => {
    if(isLogin) {
      navigate('/')
    }
  }, [isLogin])

  return (
    <div className='mt-100'>
    <form className='text-center w-25 m-auto'>
      <FaBootstrap className="mb-4 d-block m-auto fs-1" />
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
      <ValidationError/>

      <Input label={'Email address'} state={email} setState={setEmail}/>
      <Input label={'password'} type={'password'} state={password} setState={setPassword}/>
      
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit" disabled={isLoading} onClick={loginHandle}>
        {isLoading ? 'loading...' : 'Log in'}
      </button>
      <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
    </form>
    </div>
  )
}

export default Login