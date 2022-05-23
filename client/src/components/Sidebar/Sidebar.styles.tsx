import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { RiCloseFill } from 'react-icons/ri';

interface IMenuProps {
  active?: boolean;
}

interface ISidebarProps {
  isOpen: boolean;
}

export const SidebarWrapper = styled.div<ISidebarProps>`
  position: fixed;
  background-color: var(--primary);
  width: 100%;
  height: 100%;
  z-index: 99;
  display: none;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

  @media only screen and (max-width: 30em) {
    display: block;
  }
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

export const MenuClose = styled(RiCloseFill)`
  color: var(--white-grey);
  font-size: 3rem;
  margin-top: 3rem;
  margin-left: 3rem;
  cursor: pointer;
`;

export const MenuTitle = styled(Link)`
  display: inline-block;
  text-transform: uppercase;
  color: var(--light-grey);
  text-decoration: none;
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
  margin-bottom: 1rem;
  &.active {
    border-right: 0.5rem solid var(--blue);
    color: ${(props) => (props.active ? '' : '#64848C')};
  }
`;

export const MenuLogoutLink = styled.div`
  font-size: 1.7rem;
  color: var(--light-grey);
  cursor: pointer;
  margin-bottom: 2rem;
`;

export const MenuIcon = styled.span`
  margin-right: 1rem;
`;
