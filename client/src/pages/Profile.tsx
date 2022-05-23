import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Card from '../components/Card/Card';
import Spinner from '../components/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../components/Text/Text';
import { IMovie } from '../schemas/Movie';
import { Grid, Row } from '../components/Grid/Grid';

const Profile = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [likes, setLikes] = useState<IMovie[]>([]);

  const navigate = useNavigate();

  const getLikes = async () => {
    try {
      const res = await axios.get('/api/users/liked-movies');

      setLikes(res.data);
      setLoading(false);
    } catch (error) {
      navigate('*');
    }
  };

  const renderLikess = () => {
    return likes.map((movie, index) => {
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
    getLikes();
  }, []);

  return (
    <Container>
      <Heading>My Likes</Heading>
      {loading ? (
        <Spinner />
      ) : (
        <Grid>
          <Row>{renderLikess()}</Row>
        </Grid>
      )}
    </Container>
  );
};

export default Profile;
