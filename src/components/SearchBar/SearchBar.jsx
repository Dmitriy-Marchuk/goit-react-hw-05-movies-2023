import { useState } from 'react';
import { SearchButton, SearchForm, SearchInput } from './SearchBar.styled';

const SearchBar = ({ onSubmit, movieQuery }) => {
  const [query, setQuery] = useState('');

  const handleInput = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return alert('Wrong request! Write something!');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        onChange={handleInput}
        value={query}
        type="text"
        placeholder="Enter query"
        autoComplete="off"
        autoFocus
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
};

export default SearchBar;
