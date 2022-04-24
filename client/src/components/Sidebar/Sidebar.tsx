import React from 'react';
import {
  Menu,
  MenuTitle,
  MenuItem,
  SidebarWrapper,
  MenuSub,
  MenuLinks,
  MenuLinkItem,
  MenuLink,
  MenuClose,
  MenuIcon,
} from './Sidebar.styles';
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

interface ISidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Links: ILinks[] = [
  { title: 'Discover', url: '/discover', icon: <RiStackLine /> },
  { title: 'Popular Movies', url: '/popular-movies', icon: <RiMovie2Line /> },
  { title: 'Popular Shows', url: '/popular-shows', icon: <RiSlideshow2Fill /> },
];

const SearchLinks: ILinks[] = [
  { title: 'Search for Movie', url: '/movie-search', icon: <RiSearchLine /> },
  { title: 'Search for Show', url: '/tv-search', icon: <RiSearchLine /> },
];

const Sidebar: React.FC<ISidebarProps> = ({ isOpen, toggle }) => {
  return (
    <SidebarWrapper isOpen={isOpen} onClick={toggle}>
      <MenuClose onClick={toggle} />
      <Menu>
        <MenuItem>
          <MenuTitle to='/'>Movieflix</MenuTitle>
          <br />
          <MenuSub>Browse</MenuSub>
          <MenuLinks>
            {Links.map((link, index) => {
              return (
                <MenuLinkItem key={index}>
                  <MenuLink to={link.url}>
                    <MenuIcon>{link.icon}</MenuIcon>
                    {link.title}
                  </MenuLink>
                </MenuLinkItem>
              );
            })}
          </MenuLinks>
        </MenuItem>
        <MenuItem>
          <MenuSub>Search</MenuSub>
          <MenuLinks>
            {SearchLinks.map((link, index) => {
              return (
                <MenuLinkItem key={index}>
                  <MenuLink to={link.url}>
                    <MenuIcon>{link.icon}</MenuIcon>
                    {link.title}
                  </MenuLink>
                </MenuLinkItem>
              );
            })}
          </MenuLinks>
        </MenuItem>
      </Menu>
    </SidebarWrapper>
  );
};

export default Sidebar;
