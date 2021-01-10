import React, { useState } from 'react';
import clsx from 'clsx';

type Props = {
  checked?: boolean;
};

export default function Toggle({ checked = false }: Props) {
  const [toggle, setToggle] = useState(checked);
  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <label className='toggle'>
      <span
        role='checkbox'
        tabIndex={0}
        aria-checked={toggle}
        className={clsx('toggle__main', toggle ? 'checked' : '')}
      >
        <span
          onClick={handleClick}
          aria-hidden='true'
          className={clsx('toggle__button', toggle ? 'toggle__right' : '')}
        ></span>
      </span>
      <span className='toggle__label'>{toggle ? 'id' : 'title'}</span>
    </label>
  );
}
