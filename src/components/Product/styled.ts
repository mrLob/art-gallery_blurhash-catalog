import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 420px;
  max-width: 50%;
  @media (max-width: 768px) {
    min-width: initial;
    max-width: initial;
  }
`;
export const GalleryWrapper = styled.div`
  display: flex;
  margin: 0 2rem 0 0;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  max-width: 50%;
  @media (max-width: 768px) {
    max-width: initial;
    min-width: initial;
  }
`;

export const Header = styled.div`
  font-size: 2.5rem;
  font-weight: 400;
  letter-spacing: 0;
  margin: 0 0 1rem 0;
  line-height: 1.3em;
  sub {
    font-size: 0.5em;
    line-height: 1.3em;
  }
`;
export const Subheader = styled.div`
  font-size: 1rem;
  line-height: 1.8em;
  font-weight: 300;
  opacity: 0.65;
`;
export const Price = styled.div`
  margin: 1rem 0;
  font-size: 1.25rem;
  font-weight: 200;
`;
export const BuyButton = styled.a`
  width: max-content;
  height: max-content;
  text-decoration: none;
  text-transform: uppercase;
  background-color: black;
  color: white;
  padding: 0.75rem 1.25rem;
  border: 1px #000 solid;
  transition: all 0.3s ease-in-out;
  font-weight: 300;

  &:hover {
    color: black;
    background-color: white;
  }
`;

export const DescriptionList = styled.ul`
  color: #414145;
  font-size: 0.75rem;
  font-weight: 400;
  margin: 3rem 0 0 0;
  padding: 0;
  line-height: 1.8em;
  list-style-type: none;

  li {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    border-top: 1px solid #ccc;
    padding: 1.25rem 0;
    opacity: 0.7;
    span {
      padding: 0 1rem 0 0;
    }
  }
`;
