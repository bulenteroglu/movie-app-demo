import React, { Suspense } from 'react';

function Placeholder() {
  return <div>loading</div>;
}

export default function Layout({ children }: { children: any }) {
  return (
    <div>
      <Suspense fallback={<Placeholder />}>{children}</Suspense>
    </div>
  );
}
