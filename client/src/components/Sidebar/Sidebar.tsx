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
  MenuIcon,
} from './Sidebar.styles';
import {
  RiCompassDiscoverLine,
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
  { title: 'Discover', url: '/', icon: <RiStackLine /> },
  { title: 'Popular Movies', url: '/popular-movies', icon: <RiMovie2Line /> },
  { title: 'Popular Shows', url: '/popular-shows', icon: <RiSlideshow2Fill /> },
  {
    title: 'Coming Soon',
    url: '/coming-soon',
    icon: <RiCompassDiscoverLine />,
  },
];

const SearchLinks: ILinks[] = [
  { title: 'Search for Movie', url: '/movie-search', icon: <RiSearchLine /> },
  { title: 'Search for Show', url: '/tv-search', icon: <RiSearchLine /> },
];

const Sidebar: React.FC = () => {
  return (
    <SidebarWrapper>
      <Menu>
        <MenuItem>
          <MenuTitle>Movieflix</MenuTitle>
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
