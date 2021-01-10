import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Props = {
  checked: boolean;
};

export default function Search({ checked }: Props) {
  const [userSearch, setUserSearch] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    axios
      .get(
        `http://www.omdbapi.com/?${
          checked ? `t=${userSearch}` : `i=${userSearch}`
        }&apikey=3901aa62`
      )
      .then((res) => {
        console.log(res.data);
      });

    setUserSearch('');
  }

  return (
    <div className='search'>
      <form onSubmit={handleSubmit} className='search__form'>
        <svg
          className='search__icon'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
            clipRule='evenodd'
          />
        </svg>
        <input
          value={userSearch}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setUserSearch(e.currentTarget.value)
          }
          className='search__input'
          type='text'
          placeholder='Search Movie...'
        />
      </form>
      {/* {!checked && <ErrorMessage />} */}
    </div>
  );
}
