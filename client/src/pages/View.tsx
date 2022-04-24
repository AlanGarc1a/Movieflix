import React, { useState, useEffect } from 'react';
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
} from '../components/Presentation/view.styles';
import axios from 'axios';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import { IPosters } from '../schemas/Posters';
import { Button } from '../components/Button/Button';
import Spinner from '../components/Spinner/Spinner';
import Container from '../components/Container/Container';
import { Navigate } from 'react-router-dom';

const View: React.FC = () => {
  const [item, setItem] = useState<IMovie>();
  const [posters, setPosters] = useState<IPosters>();
  const [loading, setLoading] = useState<boolean>(true);
  const [errorRedirect, setError] = useState<boolean>(false);

  const { movieId } = useParams();

  const getItem = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/get-movie/${movieId}`
      );

      const posters = await axios.get(
        `http://localhost:8080/api/posters/${movieId}`
      );

      const { data } = res;

      setItem(data);
      setPosters(posters.data.backdrops[2]);
      setLoading(false);
    } catch (error) {
      setError(true);
      if (errorRedirect) {
        return <Navigate to='*' replace />;
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
                    <ViewTitle>{item?.title}</ViewTitle>
                    <ViewRating>
                      {item?.imDbRating ? item.imDbRating : 0}
                    </ViewRating>
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
