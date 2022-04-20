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
  align-items: stretch;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  list-style-type: none;
  margin: 1.8rem 0rem;
  padding-right: 1.5rem;
`;

export const NavItem = styled.li``;

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
