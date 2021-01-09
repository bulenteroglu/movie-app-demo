import React, { Suspense } from 'react';
import Header from './Header/Header';

function Placeholder() {
  return <div>loading</div>;
}

export default function Layout({ children }: { children: any }) {
  return (
    <div className='layout'>
      <Header />
      <Suspense fallback={<Placeholder />}>{children}</Suspense>
    </div>
  );
}
