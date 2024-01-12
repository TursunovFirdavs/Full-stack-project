import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Main, Login, Register, Navbar, ArticleDetails, CreateArticle } from './components'
import AuthService from './service/auth';
import { useDispatch } from 'react-redux';
import { signUserSuccess } from './slice/auth';
import { useEffect } from 'react';
// import { getUser } from './helpers/persistance-storage';
import ArticleService from './service/article';
import { getArticleStart, getArticleSuccess } from './slice/article';

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

  const getArticles = async () => {
    dispatch(getArticleStart())
    try {
      const response = await ArticleService.getArticle() 
      dispatch(getArticleSuccess(response.articles))
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      gettingUser()
    }
    getArticles()
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
      </Routes>
      </div>
    </div>
  );
}

export default App;
