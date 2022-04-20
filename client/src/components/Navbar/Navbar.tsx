import React from 'react';
import { Nav, NavItem, NavItemLink, NavList } from './Navbar.styles';
import {
  RiMovie2Line,
  RiSlideshow2Fill,
  RiStackLine,
  RiSearchLine,
} from 'react-icons/ri';
import { HeadingLink } from '../Text/Text';

interface ILinks {
  title: string;
  url: string;
  icon: JSX.Element;
}

const Links: ILinks[] = [
  { title: 'Discover', url: '/discover', icon: <RiStackLine /> },
  { title: 'Popular Movies', url: '/popular-movies', icon: <RiMovie2Line /> },
  { title: 'Popular Shows', url: '/popular-shows', icon: <RiSlideshow2Fill /> },
  { title: 'Search for Movie', url: '/movie-search', icon: <RiSearchLine /> },
  { title: 'Search for Show', url: '/tv-search', icon: <RiSearchLine /> },
];

const Navbar: React.FC = () => {
  return (
    <>
      <Nav>
        <HeadingLink to='/'>Movieflix</HeadingLink>
        <NavList>
          <NavItem>
            {Links.map((link, index) => {
              return (
                <NavItemLink to={link.url} key={index}>
                  {link.title}
                </NavItemLink>
              );
            })}
          </NavItem>
        </NavList>
      </Nav>
    </>
  );
};

export default Navbar;
