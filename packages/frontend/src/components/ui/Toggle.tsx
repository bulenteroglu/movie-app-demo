import React, { useState } from 'react';
import clsx from 'clsx';

type Props = {
  checked?: boolean;
  setChecked: any;
};

export default function Toggle({ checked, setChecked }: Props) {
  function handleClick() {
    setChecked(!checked);
  }

  return (
    <label className='toggle'>
      <span
        onClick={handleClick}
        role='checkbox'
        tabIndex={0}
        aria-checked={checked}
        className={clsx('toggle__main', checked && 'checked')}
      >
        <span
          aria-hidden='true'
          className={clsx('toggle__button', checked && 'toggle__right')}
        ></span>
      </span>
      <label className='toggle__label'>
        Search {checked ? 'movie title' : 'IMDB Id'}
      </label>
    </label>
  );
}
