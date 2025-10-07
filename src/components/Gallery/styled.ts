import styled from 'styled-components';

export const Container = styled.div``;

export const PictureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 465px;
`;
export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const PreviewWrapper = styled.div<{ active: boolean }>`
  display: flex;
  width: 97px;
  height: 97px;
  padding: 0.5rem 1rem 0 0;
  ${({ active }) => !active && 'filter: grayscale(80%);'}
`;
