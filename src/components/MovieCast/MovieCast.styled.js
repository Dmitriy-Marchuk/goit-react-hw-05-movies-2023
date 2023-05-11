import styled from 'styled-components';

export const ProfileList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
  max-width: calc(100vw - 48px);
  padding: 0 0 30px 0;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
`;

export const ProfileImage = styled.img`
  width: 150px;
  border-radius: 5px;
`;

export const NameProfile = styled.p`
  font-weight: 500;
  margin: 5px 0 2px 0;
`;
