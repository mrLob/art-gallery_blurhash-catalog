import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  padding: 0 0 0 0;
  background-color: black;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  span {
    margin: 0.35rem 0 0 0;
  }
`;

export const Item = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: max-content;
  margin: 0.5rem;
  filter: drop-shadow(0px 0px 1px #fff);
`;

export const List = styled.div<{ open?: boolean }>`
  transition: all 0.25s ease;
  opacity: ${({ open }) => (open && 1) || 0};
  visibility: ${({ open }) => (open && 'visible') || 'hidden'};
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 2.5rem;
  border-radius: 3rem;
  transform: ${({ open }) => (open && 'translate(0, -75px)') || 'translate(0, 0)'};
  &:last-child {
    margin-bottom: 3rem;
  }
`;
