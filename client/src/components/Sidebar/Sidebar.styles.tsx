import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface IMenuProps {
  active?: boolean;
}

export const SidebarWrapper = styled.div`
  position: fixed;
  background-color: var(--primary);
  width: 10%;
  height: 100%;
  z-index: 99;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const MenuItem = styled.div`
  width: 100%;
  padding-left: 3rem;
  padding-top: 3rem;
`;

export const MenuTitle = styled.h1`
  text-transform: uppercase;
  color: var(--light-grey);
  font-size: 2.5rem;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;

export const MenuSub = styled.span`
  display: inline-block;
  color: var(--white-grey);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const MenuLinkItem = styled.div`
  margin-bottom: 1rem;
`;

export const MenuLink = styled(NavLink)<IMenuProps>`
  display: inline-block;
  font-size: 1.7rem;
  font-weight: 500;
  text-decoration: none;
  width: 100%;
  color: var(--light-grey);
  &.active {
    border-right: 0.5rem solid var(--blue);
    color: ${(props) => (props.active ? '#64848C' : undefined)};
  }
`;

export const MenuIcon = styled.span`
  margin-right: 1rem;
`;
