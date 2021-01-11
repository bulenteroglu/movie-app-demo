import React, { useState } from 'react';
import axios from 'axios';
import noImageFound from '../../assets/no-image-found.png';
import { divide } from 'numeral';

type Props = {
  data: any;
  setSearched: any;
  setData: any;
};

function FavouriteMovie({ movie, setSearched, setData }: any) {
  function handleClick() {
    setData(movie);
    setSearched(true);
  }

  return (
    <div className='favourite' onClick={handleClick}>
      <img
        className='favourite__poster'
        src={movie.Poster === 'N/A' ? noImageFound : movie.Poster}
        alt={movie.Title}
      />
      <div className='favourite__info'>
        <div className='favourite__title'>{movie.Title}</div>
      </div>
    </div>
  );
}

export default function Favourites({ data, setSearched, setData }: Props) {
  function deleteAllFavourites() {
    setSearched(false);
    localStorage.clear();
  }

  return (
    <div className='favourite__section'>
      {data && data.length > 0 ? (
        <>
          <span className='favourites__title'>
            Your favourites ({data.length})
          </span>

          <div className='favourite__danger' onClick={deleteAllFavourites}>
            Delete all favourites?
          </div>
        </>
      ) : (
        <div className='favourites__title noFav'>
          Oh no! How about we favourite some movies?
        </div>
      )}
      <div className='favourites'>
        {data &&
          data.map((movie: any, i: number) => (
            <FavouriteMovie
              key={i}
              movie={movie}
              setSearched={setSearched}
              setData={setData}
            />
          ))}
      </div>
    </div>
  );
}
