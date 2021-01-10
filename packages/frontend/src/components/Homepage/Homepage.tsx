import React, { useState } from 'react';
import Search from '../Search/Search';
import Toggle from '../ui/Toggle';

export default function Homepage() {
  return (
    <div>
      <Toggle />
      <Search />
    </div>
  );
}
