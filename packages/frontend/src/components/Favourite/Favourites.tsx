import React, { useState } from 'react';
import noImageFound from '../../assets/no-image-found.png';

type Props = {
  data: any;
};

function FavouriteMovie({ movie }: any) {
  return (
    <div className='favourite'>
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

export default function Favourites({ data }: Props) {
  return (
    <div className='favourite__section'>
      <span className='favourites__title'>Your favourites ({data.length})</span>
      <div className='favourites'>
        {data &&
          data.map((movie: any, i: number) => (
            <FavouriteMovie key={i} movie={movie} />
          ))}
      </div>
    </div>
  );
}
