import React from 'react';
import NavigationPane from '../components/NavigationPane';
import Link from 'next/link';

const Routes = () => {
  return (
    <div>
      <NavigationPane />
      <main>
        <Link href="/home">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </main>
    </div>
  );
};

export default Routes;