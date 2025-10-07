import styled from 'styled-components';
import { Blurhash } from 'react-blurhash';

export const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  cursor: pointer;
  max-width: 420px;
  min-height: 184px;
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

export const Img = styled.img<{ loaded: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.1s ease-in-out;
  box-shadow: 0 0 26px -26px rgba(66, 68, 90, 0);

  ${({ loaded }) => (!loaded && 'opacity: 0;') || 'opacity: 1;'}
  &:hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.005);
    box-shadow: 0 0 26px -16px rgba(66, 68, 90, 1);
  }
`;

export const TextContainer = styled.div<{ visible?: boolean }>`
  position: absolute;
  bottom: -1.25rem;
  display: flex;
  font-weight: 200;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${({ visible }) => (visible && 1) || 0};
  transition: all 0.1s ease-in-out;

  ${Container}:hover & {
    transition: all 0.1s ease-in-out;
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: flex;
    opacity: 1;
  }
`;
export const Title = styled.div`
  font-size: 20px;
`;

export const Price = styled.div`
  font-size: 14px;
`;

export const StyledBlurhash = styled(Blurhash)<{ loaded: boolean }>`
  display: flex !important;
  width: 100% !important;
  height: 100% !important;
  position: initial !important;

  transition: opacity 0.3s ease;
  ${({ loaded }) => (loaded && 'opacity: 0;') || 'opacity: 1;'}
`;
