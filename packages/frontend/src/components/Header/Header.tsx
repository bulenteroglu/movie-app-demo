import React from 'react';

export default function Header() {
  return (
    <header className='header'>
      <div className='header__info'>
        <div className='header__name'>Bulent Eroglu frontend demo for </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 137.26 15.84'
          fill='currentColor'
          className='logo'
          data-src='/static/images/logos/tangent.svg'
        >
          <path
            className='prefix__char prefix__t1'
            d='M0 1.51h5.07v14.33h1.51V1.51h5.06V0H0v1.51z'
          />
          <path
            className='prefix__char prefix__a'
            d='M23.05 0l-7.26 15.84h1.71l6.13-13.5 6.23 13.5h1.69L24.21 0h-1.16z'
          />
          <path d='M40.41 12.18l.49-.76V0h-1.51v12.3h.94l.08-.12zm-1.43 3.66h1.87l9.58-13.2v13.2h1.51V0h-1.46l-11.5 15.84z' />
          <path
            className='prefix__char prefix__g'
            d='M67.31 9h5.86v4a6.74 6.74 0 01-8.1.09A6.36 6.36 0 0162.42 8a6.54 6.54 0 016.63-6.42 6.91 6.91 0 013.67 1.02l.43.28.85-1.24-.48-.31A8.15 8.15 0 0069.05 0a8 8 0 00-8.12 7.88 7.8 7.8 0 003.26 6.32 8.19 8.19 0 004.86 1.61 8.33 8.33 0 005.54-2.14l.09-.08V7.51H68.4z'
          />
          <path
            className='prefix__char prefix__e'
            d='M86.45 8.45h7.83V6.94h-7.83V1.51h8.8V0H84.94v15.84h10.61v-1.51h-9.1V8.45z'
          />
          <path d='M116.47 12.3h.94V0h-1.52l.06 11.59.52.71zM104.86 0v15.84h1.51V2.64l9.58 13.2h1.86L106.31 0h-1.45z' />
          <path
            className='prefix__char prefix__t2'
            d='M125.62 0v1.51h5.06v14.33h1.51V1.51h5.07V0h-11.64z'
          />
        </svg>
      </div>
      <h1 className='header_title'>Find Movies, TV shows and more ...</h1>
    </header>
  );
}
