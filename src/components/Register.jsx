import React, { useEffect, useState } from 'react'
import { FaBootstrap } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../ui';
import { signUserFailure, signUserStart, signUserSuccess } from '../slice/auth';
import AuthService from '../service/auth';
import { ValidationError } from './';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { isLoading, isLogin } = useSelector(state => state.auth)
  const navigate = useNavigate()


  const registerHandle = async (e) => {
    e.preventDefault()
    dispatch(signUserStart())
    const user = { username: name, email, password }
    try {
      const response = await AuthService.userRegister(user)
      // console.log(response);
      // console.log(user);
      dispatch(signUserSuccess(response.user))
      navigate('/')
    }
    catch (error) {
      console.log(error);
      dispatch(signUserFailure(error.response.data.errors))
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
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
        <ValidationError />

        <Input label={'Your name'} state={name} setState={setName} />
        <Input label={'Email address'} state={email} setState={setEmail} />
        <Input label={'password'} type={'password'} state={password} setState={setPassword} />

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit" disabled={isLoading} onClick={registerHandle}>
          {isLoading ? 'loading...' : 'Log in'}
        </button>
        <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
      </form>
    </div>
  )
}

export default Register