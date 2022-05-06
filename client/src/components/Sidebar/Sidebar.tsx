import React, { useContext } from 'react';
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
  MenuLogoutLink,
} from './Sidebar.styles';
import {
  RiMovie2Line,
  RiSlideshow2Fill,
  RiStackLine,
  RiSearchLine,
  RiUserFill,
  RiLogoutBoxRLine,
  RiLoginBoxFill,
} from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CurrentUserContext from '../../context/authContext';
import axios from 'axios';

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
  const currentUser = useContext(CurrentUserContext);

  let navigate = useNavigate();

  if (!currentUser) {
    return null;
  }

  const { user, setUser } = currentUser;

  const handleLogout = async () => {
    try {
      const res = await axios.get('/api/users/logout', {
        withCredentials: true,
      });
      if (res.status === 200) {
        setUser({
          isLoggedIn: false,
        });
        toast.success('Logout success', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
        });
      }
      navigate('/sign-up');
    } catch (error) {
      navigate('/sign-up');
    }
  };

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
        {user?.isLoggedIn ? (
          <MenuItem>
            <MenuSub>General</MenuSub>
            <MenuLinks>
              <MenuLinkItem>
                <MenuLogoutLink>
                  <MenuIcon>
                    <RiUserFill />
                  </MenuIcon>
                  {user.username}
                </MenuLogoutLink>
              </MenuLinkItem>
              <MenuLinkItem onClick={handleLogout}>
                <MenuLogoutLink>
                  <MenuIcon>
                    <RiLogoutBoxRLine />
                  </MenuIcon>
                  logout
                </MenuLogoutLink>
              </MenuLinkItem>
            </MenuLinks>
          </MenuItem>
        ) : (
          <MenuItem>
            <MenuSub>Browse</MenuSub>
            <MenuLinks>
              <MenuLinkItem>
                <MenuLink to='sign-up'>
                  <MenuIcon>
                    <RiUserFill />
                  </MenuIcon>
                  SIgnUp
                </MenuLink>
              </MenuLinkItem>
              <MenuLinkItem>
                <MenuLink to='login'>
                  <MenuIcon>
                    <RiLoginBoxFill />
                  </MenuIcon>
                  Login
                </MenuLink>
              </MenuLinkItem>
            </MenuLinks>
          </MenuItem>
        )}
      </Menu>
    </SidebarWrapper>
  );
};

export default Sidebar;
