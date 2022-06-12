import React from 'react';
import {
  HeaderContent,
  HeaderHeading,
  HeaderIntro,
  HeaderSubHeading,
} from './Header.styles';
import HeroBG from '../../assets/hero_background.jpg';

const Header: React.FC = () => {
  return (
    <HeaderContent bgImage={HeroBG}>
      <HeaderIntro>
        <HeaderHeading>
          Browse Unlimited movies, tv shows, and more.
        </HeaderHeading>
        <HeaderSubHeading>Powered by the IMDB API.</HeaderSubHeading>
      </HeaderIntro>
    </HeaderContent>
  );
};

export default Header;
