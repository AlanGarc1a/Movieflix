import React, { useEffect, useState } from 'react';
import GlobalStyle from './globalStyles';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Discover from './pages/Discover';
import Home from './pages/Home';
import PopularMovies from './pages/PopularMovies';
import PopularShows from './pages/PopularShows';
import View from './pages/View';
import MovieSearch from './pages/MovieSearch';
import ShowSearch from './pages/ShowSearch';
import NotFound from './components/NotFound/NotFound';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';
import CurrentUserContext, { IUserProps } from './context/authContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landing from './pages/Landing';

function App() {
  const [user, setUser] = useState<IUserProps>({
    username: null,
    isLoggedIn: false,
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get('/api/users/isAuth', {
          withCredentials: true,
        });

        setUser({
          username: res.data.username,
          isLoggedIn: true,
        });
      } catch (error) {
        toast.error('Please login', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
        });
        setUser({
          isLoggedIn: false,
        });
      }
    };
    checkAuth();
  }, []);

  return (
    <>
      <GlobalStyle />
      {!user.isLoggedIn ? <ToastContainer /> : <></>}
      <CurrentUserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path='/' element={<Layout />}>
            {user.isLoggedIn && (
              <>
                <Route path='/' element={<Home />} />
                <Route path='discover' element={<Discover />} />
                <Route path='popular-movies' element={<PopularMovies />} />
                <Route path='popular-shows' element={<PopularShows />} />
                <Route path=':movieTitle/:movieId' element={<View />} />
                <Route path='movie-search' element={<MovieSearch />} />
                <Route path='tv-search' element={<ShowSearch />} />
                <Route path='*' element={<NotFound />} />
                <Route path='profile'>
                  <Route path='likes' element={<Profile />} />
                </Route>
              </>
            )}
            <Route path='*' element={<NotFound />} />
            {user.isLoggedIn || (
              <>
                <Route index element={<Landing />} />
                <Route path='sign-up' element={<SignUp />} />
                <Route path='login' element={<Login />} />
              </>
            )}
          </Route>
        </Routes>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
