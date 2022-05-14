import { RiMenuLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  height: 6.3rem;
  background-color: var(--primary);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 30em) {
    justify-content: center;
  }
`;

export const NavHome = styled(NavLink)`
  text-decoration: none;
  font-size: 2rem;
  margin: 1.8rem 3rem;
  color: var(--white);
  align-self: center;

  &.active {
    border-bottom: 0.2rem solid var(--white);
  }
`;

export const NavMenu = styled(RiMenuLine)`
  display: none;
  font-size: 3rem;
  align-self: center;
  margin-left: 3rem;
  cursor: pointer;
  position: absolute;
  left: 0;

  @media only screen and (max-width: 30em) {
    color: var(--white-grey);
    display: block;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  list-style-type: none;
  margin: 1.8rem 0rem;
  padding-right: 1.5rem;

  @media only screen and (max-width: 30em) {
    display: none;
  }
`;

export const NavItem = styled.li`
  list-style-type: none;
  color: var(--white);
  margin-right: 3rem;
  font-size: 1.8rem;
  position: relative;
`;

export const NavItemLink = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  font-size: 1.5rem;
  font-weight: 500;

  &:not(:last-child) {
    margin-right: 3rem;
  }

  &.active {
    border-bottom: 0.3rem solid var(--white);
  }
`;

export const NavRegister = styled.div`
  margin-right: 4rem;
  @media only screen and (max-width: 30em) {
    display: none;
  }
`;

export const UserLogin = styled(NavRegister)`
  @media only screen and (min-width: 50.625em) {
    margin-right: 0rem;
  }
`;

export const NavIcon = styled.span`
  font-size: 1.4rem;
  padding-right: 0.4rem;
`;
