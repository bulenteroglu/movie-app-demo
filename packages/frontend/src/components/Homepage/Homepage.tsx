import React, { useState, useEffect } from 'react';
import Movie from '../Movie/Movie';
import Search from '../Search/Search';
import Toggle from '../ui/Toggle';
import Header from '../Header/Header';
import Favourites from '../Favourite/Favourites';

export default function Homepage() {
  const [checked, setChecked] = useState(true);
  const [searched, setSearched] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [favourites, setFavourites] = useState([]);

  return (
    <div>
      {data.length < 1 ? (
        <div className='layout'>
          <Header />
          <Toggle checked={checked} setChecked={setChecked} />
          <Search
            checked={checked}
            setData={setData}
            setSearched={setSearched}
          />
          <Favourites
            data={JSON.parse(localStorage.getItem('favorites') || '[]')}
          />
        </div>
      ) : (
        <Movie data={data} setData={setData} />
      )}
    </div>
  );
}
