import React, { useState } from 'react';
import Movie from '../Movie/Movie';
import Search from '../Search/Search';
import Toggle from '../ui/Toggle';
import Header from '../Header/Header';

export default function Homepage() {
  const [checked, setChecked] = useState(true);
  const [data, setData] = useState<any[]>([]);

  console.log(data);

  return (
    <div>
      {false ? (
        <div className='layout'>
          <Header />
          <Toggle checked={checked} setChecked={setChecked} />
          <Search checked={checked} setData={setData} />
        </div>
      ) : (
        <Movie data={data} />
      )}
    </div>
  );
}
