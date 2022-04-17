import React from 'react';

import Hero from './Hero/Hero';
import Introduciton from './Introduction/Introduction';
import ProductCatalog from './ProductCatalog/ProductCatalog';

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduciton />
      <ProductCatalog />
    </main>
  )
}
