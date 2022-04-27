import React, { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import { IMovie } from '../schemas/Movie';
import axios from 'axios';
import List from '../components/List/List';
import Spinner from '../components/Spinner/Spinner';
import { Navigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [popularMovies, setPopularMovies] = useState<IMovie[]>([]);
  const [popularShows, setPopularShows] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorRedirect, setError] = useState<boolean>(false);

  const getHomeItems = async () => {
    try {
      const resMovies = await axios.get(`/api/popular-movies`);

      const resShows = await axios.get(`/api/popular-shows`);

      setPopularMovies(resMovies.data.items);
      setPopularShows(resShows.data.items);
      setLoading(false);
    } catch (error) {
      setError(true);
      if (errorRedirect) {
        return <Navigate to='*' replace />;
      }
    }
  };

  useEffect(() => {
    getHomeItems();
  }, []);

  return (
    <>
      <Container>
        {loading ? (
          <Spinner />
        ) : (
          <div style={{ marginTop: '8rem' }}>
            <List
              title='Popular Movies'
              items={popularMovies}
              itemsToDisplay={5}
            />

            <List
              title='Popular Shows'
              items={popularShows}
              itemsToDisplay={5}
            />
          </div>
        )}
      </Container>
    </>
  );
};

export default Home;
