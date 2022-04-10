import React from 'react';

import Hero from './Hero/Hero';
import CatalogLarge from './CatalogLarge/CatalogLarge';
import Introduction from './Introduction/Introduction';
import CatalogSmall from './CatalogSmall/CatalogSmall';
import Solutions from './Solutions/Solutions';
import Collaborators from './Collaborators/Collaborators';
import Quote from './Quote/Quote';
import Artists from './Artists/Artists';

import '../assets/sass/style.scss';

export default function Home() {
  return (
    <main>
      <Hero />
      <CatalogLarge />
      <Introduction />
      <Artists />
      <CatalogSmall />
      <Solutions />
      <Collaborators />
      <CatalogLarge />
      <Quote />
    </main>
  )
}
