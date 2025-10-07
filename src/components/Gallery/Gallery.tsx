import React, { FC, useEffect, useState } from 'react';
import { Container, PictureWrapper, PreviewContainer, PreviewWrapper } from './styled';
import { Image } from '../../types/data';
import { Picture } from '../index';

type Props = {
  items: Image[];
};
const Gallery: FC<Props> = ({ items }) => {
  const [selected, setSelected] = useState<Image>();
  useEffect(() => {
    const initial = (items[0] && items[0]) || [
      {
        name: 'None',
        url: 'none.jpg',
      },
    ];
    setSelected(initial);
  }, [items]);
  return (
    <Container>
      <PictureWrapper>
        {selected && <Picture zoom src={selected?.url} blurhash={selected?.blurhash} />}
      </PictureWrapper>
      <PreviewContainer>
        {items.length > 1 &&
          items.map((item, index) => (
            <PreviewWrapper
              onClick={() => setSelected(item)}
              key={item.url + index}
              active={selected?.name === item?.name}
            >
              <Picture src={item.url} blurhash={item?.blurhash} />
            </PreviewWrapper>
          ))}
      </PreviewContainer>
    </Container>
  );
};

export default Gallery;
