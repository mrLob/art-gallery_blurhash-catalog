import React from 'react';
import { Container, Sign } from './styled';

const Footer = () => {
  return (
    <Container>
      <Sign href={'https://mrlob.github.io/my-site/'}>
        © {new Date().getFullYear()} by <u>y13h</u>
      </Sign>
    </Container>
  );
};

export default Footer;
