import React, { useContext } from 'react';
import {
  Nav,
  NavHome,
  NavIcon,
  NavItem,
  NavItemLink,
  NavList,
  NavMenu,
  NavRegister,
  UserLogin,
} from './Navbar.styles';
import {
  RiMovie2Line,
  RiSlideshow2Fill,
  RiStackLine,
  RiSearchLine,
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
          autoClose: 2000,
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
            <span
              style={{
                fontSize: '1.8rem',
                color: 'var(--white)',
                marginRight: '1rem',
                cursor: 'pointer',
              }}
            >
              {user.username}
            </span>
            <span
              style={{
                fontSize: '1.8rem',
                color: 'var(--white)',
                marginRight: '3rem',
                marginLeft: '3rem',
                cursor: 'pointer',
              }}
              onClick={handleLogout}
            >
              logout
            </span>
          </UserLogin>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
