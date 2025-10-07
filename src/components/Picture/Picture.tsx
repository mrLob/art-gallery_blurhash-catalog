import React, { FC, useState } from 'react';
import { Magnifier, MOUSE_ACTIVATION, TOUCH_ACTIVATION } from 'react-image-magnifiers';
import { Container, Img, Price, StyledBlurhash, TextContainer, Title } from './styled';

type Props = {
  src: string;
  title?: string;
  price?: string | number;
  onClick?: () => void;
  zoom?: boolean;
  visible?: boolean;
  blurhash?: string;
};
const Picture: FC<Props> = ({ visible, zoom, src, title, price, onClick, blurhash }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Container onClick={onClick}>
      {(zoom && (
        <Magnifier
          mouseActivation={MOUSE_ACTIVATION.CLICK}
          touchActivation={TOUCH_ACTIVATION.TAP}
          dragToMove={false}
          imageSrc={src}
          onImageLoad={() => {
            setIsLoaded(true);
          }}
        />
      )) || (
        <>
          <Img
            loaded={isLoaded}
            src={src}
            onLoad={() => {
              setIsLoaded(true);
            }}
          />
        </>
      )}
      {!isLoaded && (
        <StyledBlurhash
          loaded={isLoaded}
          punch={1}
          hash={blurhash || 'L5S?DVt7%Mof~qofofj[-;fQRjt7'}
        />
      )}
      <TextContainer visible={visible}>
        <Title>{title}</Title>
        {price && (
          <Price>
            {price.toLocaleString(undefined, { useGrouping: true, maximumFractionDigits: 2 })}$
          </Price>
        )}
      </TextContainer>
    </Container>
  );
};

export default Picture;
