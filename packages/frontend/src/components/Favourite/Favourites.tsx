import React, { useState } from 'react';

type Props = {
  data: any;
};

export default function Favourites({ data }: Props) {
  const [movies, setMovies] = useState(data);

  return (
    <div>
      {movies &&
        movies.map((movie: any, i: number) => <h1 key={i}>{movie.Title}</h1>)}
    </div>
  );
}
