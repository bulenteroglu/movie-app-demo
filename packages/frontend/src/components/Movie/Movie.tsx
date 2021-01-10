import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

type Props = {
  data: any;
  setData: any;
};

export default function Movie({ data, setData }: Props) {
  const [movie, setMovie] = useState(data);
  const [genreList, setGenreList] = useState([]);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    setGenreList(movie.Genre.split(','));

    const existingFav = JSON.parse(localStorage.getItem('favorites') || '[]');

    const found = existingFav.find((fav: any) => fav.imdbID === movie.imdbID);

    setFav(!!found);
  }, []);

  function convertMin(num: string) {
    const getRidOfText = num.replace(/[^0-9]/g, '');
    const convertToNum = Number(getRidOfText);

    const hours = Math.floor(convertToNum / 60);
    const minutes = convertToNum % 60;

    return hours + 'h ' + minutes + 'min';
  }

  function handleFavourite() {
    const existingFav = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (existingFav.length > 0) {
      const found = existingFav.find((fav: any) => fav.imdbID === movie.imdbID);

      if (!!found === true) {
        const filter = existingFav.filter(
          (fav: any) => fav.imdbID !== movie.imdbID
        );
        existingFav.push(movie);
        localStorage.setItem('favorites', JSON.stringify(filter));
        setFav(false);
      } else {
        existingFav.push(movie);
        localStorage.setItem('favorites', JSON.stringify(existingFav));
        setFav(true);
      }
    } else {
      existingFav.push(movie);
      localStorage.setItem('favorites', JSON.stringify(existingFav));
      setFav(true);
    }
  }

  return (
    <div className='movie'>
      <svg
        onClick={() => setData([])}
        className='movie__backBtn'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
          clipRule='evenodd'
        />
      </svg>
      <div className='movie__title'>
        <h1>
          {data.Title} <span className='movie__date'>({data.Year})</span>
        </h1>
      </div>
      <div className='movie__topWrapper'>
        <img className='movie__poster' src={data.Poster} alt={data.Title} />
        <div className={clsx('movie__infoWrapper')}>
          <div
            className={clsx(
              'movie__ratingWrapper',
              data.imdbRating < 4
                ? 'low'
                : data.imdbRating < 7
                ? 'med'
                : data.imdbRating > 7 && 'high'
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
            <div className='movie__ratingNumber'>{data.imdbRating}</div>
          </div>

          <div className='movie__info'>{convertMin(data.Runtime)}</div>
          <div className='movie__info'>Director: {data.Director}</div>
          <div className='movie__info'>Gross: {data.BoxOffice}</div>
          <div className='movie__info'>Rated: {data.Rated}</div>
          <div className='movie__info'>Release: {data.Released}</div>

          {fav ? (
            <svg
              onClick={() => handleFavourite()}
              className='movie__remove fav'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z'
                clipRule='evenodd'
              />
            </svg>
          ) : (
            <svg
              onClick={() => handleFavourite()}
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
          )}
        </div>
      </div>
      <div className='movie__border' />

      <ul className='movie__genreList'>
        {genreList &&
          genreList.map((genre: string, i: number) => {
            return (
              <li key={i} className='genre__item'>
                {genre}
              </li>
            );
          })}
      </ul>
      <div className='movie__desc'>{data.Plot}</div>
    </div>
  );
}
