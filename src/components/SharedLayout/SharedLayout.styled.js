import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 30px;
  font-weight: 300;
  transition: ease-in-out 150ms;

  :hover,
  :focus {
    color: orange;
  }
  &.active {
    color: orange;
  }
  :first-child {
    margin-right: 25px;
  }
`;

export const HeaderStyled = styled.header`
  padding: 10px 20px;
  border-bottom: 1px solid grey;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
