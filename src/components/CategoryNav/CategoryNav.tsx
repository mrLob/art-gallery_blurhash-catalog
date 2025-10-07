import React, { FC } from 'react';
import { Container, Item } from './styled';
import { CategoryNavT } from '../../types/props';

type Props = {
  items: CategoryNavT[];
  onAll: () => void;
  current?: string;
};

const CategoryNav: FC<Props> = ({ items, onAll, current }) => {
  console.log(items.length > 0);
  return (
    <Container>
      <Item onClick={onAll} active={!current}>
        All
      </Item>
      {items.length > 0 &&
        items
          .filter(
            (object, index, self) => index === self.findIndex((o) => o.title === object.title),
          )
          .map(({ title, action, slug }, index) => (
            <Item key={index + title} onClick={action} active={current === slug}>
              {title}
            </Item>
          ))}
    </Container>
  );
};

export default CategoryNav;
