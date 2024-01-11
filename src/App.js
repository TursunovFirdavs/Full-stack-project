import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Main, Login, Register, Navbar } from './components'
import AuthService from './service/auth';
import { useDispatch } from 'react-redux';
import { signUserSuccess } from './slice/auth';
import { useEffect } from 'react';
import { getUser } from './helpers/persistance-storage';

function App() {
  const dispatch = useDispatch()

  const gettingUser = async () => {
    try {
      const response = await AuthService.getUser()
      dispatch(signUserSuccess(response.user))
      console.log(response.user);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token);
    if(token) {
      gettingUser()
    }
  }, [])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
