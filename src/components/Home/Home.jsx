import React from 'react';

import Hero from './Hero/Hero';
import Introduciton from './Introduction/Introduction';
import ProductCatalog from './ProductCatalog/ProductCatalog';
import CommercialMessages from './CommercialMessages/CommercialMessages';

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduciton />
      <ProductCatalog />
      <CommercialMessages />
    </main>
  )
}
