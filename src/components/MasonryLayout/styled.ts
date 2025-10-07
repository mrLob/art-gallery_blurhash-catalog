import styled from 'styled-components';
import { ResponsiveMasonry } from 'react-responsive-masonry';

// Стилизованный компонент для контейнера
export const Container = styled.div<{ gap?: string }>`
  display: flex;
  justify-content: space-between;
  gap: ${({ gap }) => gap || '0px'};
`;

export const TrackContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledResponsiveMasonry = styled(ResponsiveMasonry)`
  padding: 1rem;
  height: 100%;

  & > div > div {
    width: 100% !important;
    height: 100% !important;
  }
`;
