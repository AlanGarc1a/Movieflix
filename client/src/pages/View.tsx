import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { IMovie } from '../schemas/Movie';
import {
  ViewAbout,
  ViewHeader,
  ViewAboutDesc,
  ViewContent,
  ViewImage,
  ViewImgBox,
  ViewItem,
  ViewList,
  ViewRating,
  ViewText,
  ViewTitle,
  ViewCast,
  CenterView,
  Credit,
  ViewLike,
  ViewLiked,
  FillHeart,
} from '../components/Presentation/view.styles';
import axios from 'axios';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import { IPosters } from '../schemas/Posters';
import { Button } from '../components/Button/Button';
import Spinner from '../components/Spinner/Spinner';
import Container from '../components/Container/Container';
import { useNavigate } from 'react-router-dom';
import { RiHeartFill } from 'react-icons/ri';
import CurrentUserContext from '../context/authContext';

const View: React.FC = () => {
  const [item, setItem] = useState<IMovie>();
  const [posters, setPosters] = useState<IPosters>();
  const [loading, setLoading] = useState<boolean>(true);
  const [errorRedirect, setError] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(false);

  const { movieId } = useParams();

  let navigate = useNavigate();

  const currentUser = useContext(CurrentUserContext);

  const getItem = async () => {
    try {
      const res = await axios.get(`/api/get-movie/${movieId}`);

      const posters = await axios.get(`/api/posters/${movieId}`);

      const likedMovie = await axios.get(`/api/users/liked-movie/${movieId}`);

      const { data } = res;

      setItem(data);
      setPosters(posters.data.backdrops[0]);
      setLoading(false);
      setLike(likedMovie.data.isLiked);
    } catch (error) {
      setLike(false);
      setError(true);
      if (errorRedirect) {
        navigate('/');
      }
    }
  };

  const showRedHeart = async () => {
    try {
      const movieData = {
        id: item?.id,
        title: item?.title,
        image: item?.image,
        imDbRating: item?.imDbRating,
        username: currentUser?.user?.username,
      };
      const sendLikedMovie = await axios.post('/api/like-movie', movieData);

      setLike(sendLikedMovie.data.isLiked);
    } catch (error) {
      setError(true);
      setLike(false);
      if (errorRedirect) {
        navigate('/');
      }
    }
  };

  const showEmptyHeart = async () => {
    try {
      const movieData = {
        id: item?.id,
        title: item?.title,
        image: item?.image,
        imDbRating: item?.imDbRating,
        username: currentUser?.user?.username,
      };
      const sendLikedMovie = await axios.post('/api/unlike-movie', movieData, {
        withCredentials: true,
      });

      setLike(sendLikedMovie.data.isLiked);
    } catch (error) {
      setError(true);
      if (errorRedirect) {
        navigate('/');
      }
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Jumbotron bgImage={posters?.link} />
          <CenterView>
            <ViewContent>
              <ViewItem>
                <ViewImgBox>
                  <ViewImage src={item?.image} alt={item?.title} />
                </ViewImgBox>
              </ViewItem>
              <ViewItem>
                <ViewAbout>
                  <ViewHeader>
                    <ViewTitle>
                      {item?.title}
                      {like ? (
                        <ViewLiked onClick={showEmptyHeart}>
                          <RiHeartFill style={{ color: 'red' }} />
                        </ViewLiked>
                      ) : (
                        <ViewLike onClick={showRedHeart}>
                          <FillHeart />
                        </ViewLike>
                      )}
                    </ViewTitle>
                    <ViewRating>{item?.imDbRating}</ViewRating>
                  </ViewHeader>
                  <ViewList>
                    <ViewText>
                      {item?.runtimeMins ? item?.runtimeMins : 55} min
                    </ViewText>
                    <ViewText>{item?.genres}</ViewText>
                    <ViewText>{item?.contentRating}</ViewText>
                    <ViewText>{item?.year}</ViewText>
                  </ViewList>
                  <ViewAboutDesc>
                    {item?.plot?.slice(0, 350)}
                    <a href={item?.trailer?.link} target='_blank'>
                      Read more
                    </a>
                  </ViewAboutDesc>
                  <ViewList>
                    <Button href={item?.trailer?.link} target='_blank'>
                      Watch Trailer
                    </Button>
                    <Button href={item?.trailer?.link} target='_blank'>
                      View All Cast
                    </Button>
                  </ViewList>
                  <ViewCast>
                    <Credit>
                      <ViewText>Cast:</ViewText>
                      <ViewText>{item?.stars}</ViewText>
                    </Credit>
                    <Credit>
                      {item?.writers ? (
                        <>
                          <ViewText>Writers:</ViewText>
                          <ViewText>{item?.writers}</ViewText>
                        </>
                      ) : (
                        <></>
                      )}
                    </Credit>
                    <Credit>
                      <ViewText>Companies:</ViewText>
                      <ViewText>{item?.companies}</ViewText>
                    </Credit>
                  </ViewCast>
                </ViewAbout>
              </ViewItem>
            </ViewContent>
          </CenterView>
        </>
      )}
    </Container>
  );
};

export default View;
