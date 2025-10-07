import React, { useState } from 'react';
import { AtCircle, Call, CloseCircle, LogoInstagram, Mail } from 'react-ionicons';
import { Container, Item, List } from './styled';

const ContactMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      {open && (
        <CloseCircle color={'#fff'} onClick={() => setOpen((prev) => !prev)} width={'32px'} />
      )}
      {!open && <AtCircle color={'#fff'} onClick={() => setOpen((prev) => !prev)} width={'32px'} />}
      <List open={open}>
        <Item href={'mailto:mail@example.com'}>
          <Mail color={'#fff'} width={'2rem'} />
        </Item>
        <Item href={'tel:+234567890'}>
          <Call color={'#fff'} width={'2rem'} />
        </Item>
        <Item href={'https://www.instagram.com/'} target={'_blank'}>
          <LogoInstagram color={'#fff'} width={'2rem'} />
        </Item>
      </List>
    </Container>
  );
};

export default ContactMenu;
