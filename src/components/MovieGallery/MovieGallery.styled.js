import styled from 'styled-components';

export const MovieGalleryStyled = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 30px;
  padding: 0 0 30px 0;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
`;

export const MovieGalleryTitle = styled.h1`
  text-align: center;
  margin-top: 10px;
  font-size: 40px;
  font-weight: 500;
`;
