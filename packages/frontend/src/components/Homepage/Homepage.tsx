import React, { useState } from 'react';
import Movie from '../Movie/Movie';
import Search from '../Search/Search';
import Toggle from '../ui/Toggle';
import Header from '../Header/Header';

export default function Homepage() {
  const [checked, setChecked] = useState(true);
  const [searched, setSearched] = useState(false);
  const [data, setData] = useState<any[]>([]);

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
        </div>
      ) : (
        <Movie data={data} setSearched={setSearched} />
      )}
    </div>
  );
}
