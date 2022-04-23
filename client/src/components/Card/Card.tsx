import React from 'react';
import { IMovie } from '../../schemas/Movie';
import {
  CardBox,
  CardImg,
  CardFooter,
  CardTitle,
  CardRating,
  CardLink,
  CardImgBox,
  CardOverlay,
} from './Card.styles';

const Card: React.FC<IMovie> = ({ id, title, image, imDbRating, year }) => {
  return (
    <CardBox>
      <CardRating>{imDbRating ? imDbRating : 0.0}</CardRating>
      <CardLink to={`/${title}/${id}`}>
        <CardImgBox>
          <CardOverlay />
          <CardImg src={image} alt={title} />
          <CardFooter>
            <CardTitle>
              {title} {year}
            </CardTitle>
          </CardFooter>
        </CardImgBox>
      </CardLink>
    </CardBox>
  );
};

export default Card;
