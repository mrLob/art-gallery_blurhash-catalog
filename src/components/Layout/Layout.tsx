import React, { FC, PropsWithChildren } from 'react';
import { Container, Header, Main } from './styled';
import { Navbar } from './components';
import ContactMenu from '../ContactMenu';
import { Footer } from '../index';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Header>
        <Navbar />
      </Header>
      <Main>
        {children}
        <ContactMenu />
      </Main>
      <Footer />
    </Container>
  );
};

export default Layout;
