import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const Header = styled.header`
  position: relative;
  width: 100%;
`;
export const Main = styled.main`
  padding: 3rem 0 1rem 0;
  width: 100%;
  max-width: 970px;
  height: 100%;
  min-height: calc(100vh - 10rem);
`;
