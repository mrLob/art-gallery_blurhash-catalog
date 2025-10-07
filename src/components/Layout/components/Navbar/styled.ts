import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  height: 140px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.75rem;
  @media (max-width: 768px) {
    height: 70px;
    display: flex;
    padding: 0 1rem;
  }
`;

export const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: max-content;
`;
export const Logo = styled.img`
  height: 64px;
  transform: rotate(-25deg);
  @media (max-width: 512px) {
    height: 24px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 300;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  color: #313139;
  &[class*='active'] {
    color: #000;
    border-bottom: 1px #000 solid;
  }

  &:not(:first-child) {
    margin: 0 0 0 2.5rem;
  }
`;
