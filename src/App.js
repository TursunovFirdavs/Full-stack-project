import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Main, Login, Register, Navbar, ArticleDetails, CreateArticle, EditArticle } from './components'
import AuthService from './service/auth';
import { useDispatch } from 'react-redux';
import { signUserSuccess } from './slice/auth';
import { useEffect } from 'react';
// import { getUser } from './helpers/persistance-storage';


function App() {
  const dispatch = useDispatch()

  const gettingUser = async () => {
    try {
      const response = await AuthService.getUser()
      dispatch(signUserSuccess(response.user))
      // console.log(response.user);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      gettingUser()
    }
  }, [])
  return (
    <div>
      <Navbar />
      <div className='container'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/article/:slug' element={<ArticleDetails/>} />
        <Route path='/create-article' element={<CreateArticle/>} />
        <Route path='/edit-article/:slug' element={<EditArticle/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
