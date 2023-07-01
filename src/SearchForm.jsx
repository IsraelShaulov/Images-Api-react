import { useState } from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  // in this example we not using controlled input
  // const [search, setSearch] = useState('');

  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
    // console.log(searchValue);
  };

  return (
    <section>
      <h1 className='title'>Images API</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input search-input'
          name='search'
          placeholder='cat'
          // value={search}
          // onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' className='btn'>
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
