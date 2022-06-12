import React, { useContext, useState } from 'react';
import {
  Nav,
  NavHome,
  NavIcon,
  NavItem,
  NavItemLink,
  NavList,
  NavMenu,
  NavRegister,
  UserIcon,
  UserLogin,
  UserSubMenu,
  UserProfile,
} from './Navbar.styles';
import {
  RiMovie2Line,
  RiSlideshow2Fill,
  RiStackLine,
  RiSearchLine,
  RiLogoutBoxRLine,
  RiHeartFill,
} from 'react-icons/ri';
import CurrentUserContext from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

interface ILinks {
  title: string;
  url: string;
  icon: JSX.Element;
}

const Links: ILinks[] = [
  { title: 'Discover', url: '/discover', icon: <RiStackLine /> },
  { title: 'Popular Movies', url: '/popular-movies', icon: <RiMovie2Line /> },
  { title: 'Popular Shows', url: '/popular-shows', icon: <RiSlideshow2Fill /> },
  { title: 'Movie', url: '/movie-search', icon: <RiSearchLine /> },
  { title: 'Show', url: '/tv-search', icon: <RiSearchLine /> },
];

interface INavbarProps {
  toggle: () => void;
}

const Navbar: React.FC<INavbarProps> = ({ toggle }) => {
  const currentUser = useContext(CurrentUserContext);
  const [openSubMenu, setOpenSubMenu] = useState<boolean>(false);

  let navigate = useNavigate();

  if (!currentUser) {
    return null;
  }
  const { user, setUser } = currentUser;

  const userSubMenu = () => {
    setOpenSubMenu(!openSubMenu);
  };

  const handleLogout = async () => {
    setOpenSubMenu(!openSubMenu);
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
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
        });
      }
      navigate('/');
    } catch (error) {
      navigate('/sign-up');
    }
  };

  return (
    <>
      <Nav>
        <NavMenu onClick={toggle} />
        <NavHome to='/'>Movieflix</NavHome>
        {user?.isLoggedIn && (
          <NavList>
            <NavItem>
              {Links.map((link, index) => {
                return (
                  <NavItemLink to={link.url} key={index} onClick={toggle}>
                    <NavIcon>{link.icon}</NavIcon>
                    {link.title}
                  </NavItemLink>
                );
              })}
            </NavItem>
          </NavList>
        )}
        {!user?.isLoggedIn ? (
          <NavRegister>
            <NavItemLink to='/sign-up'>Sign Up</NavItemLink>
            <NavItemLink to='/login'>Login</NavItemLink>
          </NavRegister>
        ) : (
          <UserLogin>
            <UserIcon onClick={userSubMenu}>{user?.username}</UserIcon>
            {openSubMenu ? (
              <UserSubMenu open={openSubMenu}>
                <div>
                  <UserProfile to='/profile/likes' onClick={userSubMenu}>
                    <RiHeartFill />
                    My Likes
                  </UserProfile>
                  <span onClick={handleLogout}>
                    <RiLogoutBoxRLine />
                    logout
                  </span>
                </div>
              </UserSubMenu>
            ) : (
              <></>
            )}
          </UserLogin>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
