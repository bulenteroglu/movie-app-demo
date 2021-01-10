import React from 'react';

type Props = {
  data: any;
};

export default function Movie({ data }: Props) {
  console.log(data);

  return (
    <div className='movie'>
      <div className='movie__topWrapper'>
        <img
          className='movie__poster'
          src='https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'
          alt=''
        />
        <svg
          className='movie__add'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <div className='movie__border' />
      <div className='movie__title'>
        <h1>
          Joker <span className='movie__date'>(2019)</span>
        </h1>
      </div>
      <ul className='movie__genreList'>
        <li className='genre__item'>Animation</li>
        <li className='genre__item'>Adventure</li>
        <li className='genre__item'>Comedy</li>
      </ul>
    </div>
  );
}
