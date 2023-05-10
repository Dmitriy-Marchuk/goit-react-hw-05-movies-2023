import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 30px;
  padding-left: 10px;
  border-radius: 5px 0 0 5px;
  border: 1px solid black;
  outline: none;
`;

export const SearchButton = styled.button`
  height: 30px;
  border-radius: 0 5px 5px 0;
  border: 1px solid black;
  border-left: none;
  outline: none;
  background-color: white;
  :focus,
  :hover {
    color: orange;
    transition: ease-in-out 150ms;
  }
`;
