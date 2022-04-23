import React from 'react';
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

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='discover' element={<Discover />} />
          <Route path='popular-movies' element={<PopularMovies />} />
          <Route path='popular-shows' element={<PopularShows />} />
          <Route path=':movieTitle/:movieId' element={<View />} />
          <Route path='movie-search' element={<MovieSearch />} />
          <Route path='tv-search' element={<ShowSearch />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
