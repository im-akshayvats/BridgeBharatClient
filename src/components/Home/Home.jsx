import React from 'react';

import Hero from './Hero/Hero';
import CatalogLarge from './CatalogLarge/CatalogLarge';
import Introduction from './Introduction/Introduction';

import '../assets/sass/style.scss';

export default function Home() {
  return (
    <main>
      <Hero />
      <CatalogLarge />
      <Introduction />
    </main>
  )
}
