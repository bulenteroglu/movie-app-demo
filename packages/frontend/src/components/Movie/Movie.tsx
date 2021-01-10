import React from 'react';
import clsx from 'clsx';

type Props = {
  data: any;
};

export default function Movie({ data }: Props) {
  let rating = 9.0;

  function convertMin(num: number) {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return hours + 'h ' + minutes + 'min';
  }

  return (
    <div className='movie'>
      <div className='movie__topWrapper'>
        <img
          className='movie__poster'
          src='https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg'
          alt=''
        />
        <div className={clsx('movie__infoWrapper')}>
          <div
            className={clsx(
              'movie__ratingWrapper',
              rating < 4 ? 'low' : rating < 7 ? 'med' : rating > 7 && 'high'
            )}
          >
            <svg
              className='movie__rating'
              fill='currentColor'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
              />
            </svg>
            <div className='movie__ratingNumber'>{rating.toFixed(1)}</div>
          </div>
          <div className='movie__runtime'>{convertMin(122)}</div>
          <div className='movie__director'>Director: Todd Phillips</div>
          <div className='movie__boxoffice'>Gross: $335,451,311</div>
          <div className='movie__rated'>Rated: "R"</div>
          <div className='movie__releasedate'>Release: 04 Oct 2019</div>
        </div>

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
