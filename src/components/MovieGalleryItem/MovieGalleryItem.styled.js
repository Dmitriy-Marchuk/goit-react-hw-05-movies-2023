import styled from 'styled-components';

export const MovieItemWrapper = styled.li`
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const MovieImagePoster = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;

export const MovieItemTitle = styled.h2`
  padding: 10px;
  text-align: center;
  color: black;
  font-size: 18px;
  font-weight: 500;
`;
