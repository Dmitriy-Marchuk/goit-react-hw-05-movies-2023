import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AdditionalWrapper = styled.div`
  padding: 10px;
  border-top: 3px solid RGBA(0, 0, 0, 0.2);
  border-bottom: 3px solid RGBA(0, 0, 0, 0.2);
`;

export const AdditionalLink = styled(NavLink)`
  color: black;

  :hover,
  :focus {
    color: orange;
  }
  &.active {
    color: orange;
  }
`;
