import React from 'react';

import Hero from './Hero/Hero';
import CatalogLarge from './CatalogLarge/CatalogLarge';
import Introduction from './Introduction/Introduction';
import CatalogSmall from './CatalogSmall/CatalogSmall';
import Collaborators from './Collaborators/Collaborators';
import Quote from './Quote/Quote';

import '../assets/sass/style.scss';

export default function Home() {
  return (
    <main>
      <Hero />
      <CatalogLarge />
      <Introduction />
      <CatalogSmall />
      <Collaborators />
      <Quote />
    </main>
  )
}
