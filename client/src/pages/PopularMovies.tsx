import React, { useState, useEffect } from 'react';
import Container from '../components/Container/Container';
import { Grid, Row } from '../components/Grid/Grid';
import Card from '../components/Card/Card';
import { Heading } from '../components/Text/Text';
import { IMovie } from '../schemas/Movie';
import axios from 'axios';
import Spinner from '../components/Spinner/Spinner';
import { Navigate } from 'react-router-dom';

const PopularMovies: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorRedirect, setError] = useState<boolean>(false);

  const getMovies = async () => {
    try {
      const res = await axios.get(`/api/popular-movies/`);

      const { items } = res.data;
      setMovies(items);
      setLoading(false);
    } catch (error) {
      setError(true);
      if (errorRedirect) {
        return <Navigate to='*' replace />;
      }
    }
  };

  const renderItems = () => {
    return movies.map((movie, index) => {
      return (
        <Card
          id={movie.id}
          key={index}
          title={movie.title}
          image={movie.image}
          genres={movie.genres}
          imDbRating={movie.imDbRating}
        />
      );
    });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container>
      <Heading>Popular Movies</Heading>
      {loading ? (
        <Spinner />
      ) : (
        <Grid>
          <Row>{renderItems()}</Row>
        </Grid>
      )}
    </Container>
  );
};

export default PopularMovies;
