import React, { useState } from 'react';
import Search from '../Search/Search';
import Toggle from '../ui/Toggle';

export default function Homepage() {
  const [checked, setChecked] = useState(false);
  console.log(checked);

  return (
    <div>
      <Toggle checked={checked} setChecked={setChecked} />
      <Search checked={checked} />
    </div>
  );
}
