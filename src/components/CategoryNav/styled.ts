import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Item = styled.ol<{ active?: boolean }>`
  font-weight: 200;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  padding: 0;
  margin: 0 0 0 2rem;
  &:first-child {
    padding: 0;
    margin: 0;
  }
  ${({ active }) => active && 'border-bottom: 1px #000 solid;'}
`;
