import React from 'react';

import Hero from './Hero/Hero';
import CatalogLarge from './CatalogLarge/CatalogLarge';

import '../assets/sass/style.scss';

export default function Home() {
  return (
    <main>
      <Hero />
      <CatalogLarge />
    </main>
  )
}
