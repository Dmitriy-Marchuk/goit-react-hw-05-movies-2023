import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieInfoWrapper = styled.div`
  display: flex;
  padding: 20px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  color: RGBA(250, 250, 250, 0.8);

  h2,
  h3 {
    margin: 15px 0 5px 0;
    color: #fff;
  }
`;

export const MovieInfoOpionsWrapper = styled.div`
  margin-left: 10px;
`;

export const MoviePoster = styled.img`
  border-radius: 5px;
  object-fit: contain;

  @media screen and (max-width: 767px) {
    max-width: 250px;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
  @media screen and (min-width: 1200px) {
    width: 500px;
  }
`;

export const GoBackButton = styled(NavLink)`
  background-color: #fff;
  color: black;
  opacity: 30%;
  font-size: 20px;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 2px 15px;
  &:hover {
    opacity: 90%;
    transition: ease-in-out 150ms;
  }
`;
