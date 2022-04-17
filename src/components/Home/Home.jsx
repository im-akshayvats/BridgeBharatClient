import React from 'react';

import Hero from './Hero/Hero';
import Introduciton from './Introduction/Introduction';
import ProductCatalog from './ProductCatalog/ProductCatalog';
import CommercialMessages from './CommercialMessages/CommercialMessages';
import Solutions from './Solutions/Solutions';

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduciton />
      <ProductCatalog />
      <CommercialMessages />
      <Solutions />
    </main>
  )
}
