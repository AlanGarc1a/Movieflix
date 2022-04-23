import React from 'react';
import {
  Nav,
  NavHome,
  NavItem,
  NavItemLink,
  NavList,
  NavMenu,
} from './Navbar.styles';
import {
  RiMovie2Line,
  RiSlideshow2Fill,
  RiStackLine,
  RiSearchLine,
} from 'react-icons/ri';

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

interface INavbarProps {
  toggle: () => void;
}

const Navbar: React.FC<INavbarProps> = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavMenu onClick={toggle} />
        <NavHome to='/'>Movieflix</NavHome>
        <NavList>
          <NavItem>
            {Links.map((link, index) => {
              return (
                <NavItemLink to={link.url} key={index} onClick={toggle}>
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
