import styled from 'styled-components';

export const MovieGalleryStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 30px;
  max-width: calc(100vw - 58px);
  padding: 0 0 30px 0;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  list-style: none;

  @media screen and (max-width: 727px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MovieGalleryTitle = styled.h1`
  margin-top: 10px;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
`;
