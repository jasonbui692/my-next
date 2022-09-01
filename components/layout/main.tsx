import { LayoutProps } from '@/models/common';
import Link from 'next/link';
import React, { useEffect } from 'react';

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log('mainlayout mouting');

    return () => console.log('mainlayout unmounting');
  }, []);
  return (
    <div>
      <h1>MainLayout</h1>

      <Link href={'/'}>
        <a>Home</a>
      </Link>
      <Link href={'/about'}>
        <a>About</a>
      </Link>

      <div>{children}</div>
    </div>
  );
}
