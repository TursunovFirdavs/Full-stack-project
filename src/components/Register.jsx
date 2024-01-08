import React, { useState } from 'react'
import { FaBootstrap } from "react-icons/fa";
import { Input } from '../ui';


const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='mt-100'>
    <form className='text-center w-25 m-auto'>
      <FaBootstrap className="mb-4 d-block m-auto fs-1" />
      <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

      <Input label={'Your name'} state={name} setState={setName}/>
      <Input label={'Email address'} state={email} setState={setEmail}/>
      <Input label={'password'} type={'password'} state={password} setState={setPassword}/>
      
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
      <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
    </form>
    </div>
  )
}

export default Register