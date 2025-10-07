import React from 'react';
import { Paths } from '../../../../router/routes';
import { Container, Logo, NavItemsContainer, StyledNavLink } from './styled';
import logo from './logo.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Container>
      <NavLink to={'/'}>
        <Logo src={logo} alt={'Logo'} />
      </NavLink>
      <NavItemsContainer>
        <StyledNavLink key={'nav-paints'} to={Paths.paints}>
          Paints
        </StyledNavLink>
        <StyledNavLink key={'nav-prints'} to={Paths.prints}>
          Prints
        </StyledNavLink>
        <StyledNavLink key={'nav-about'} to={Paths.about}>
          About
        </StyledNavLink>
      </NavItemsContainer>
    </Container>
  );
};

export default Navbar;
