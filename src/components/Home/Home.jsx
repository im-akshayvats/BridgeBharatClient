import React from 'react';

import Hero from './Hero/Hero';
import Introduciton from './Introduction/Introduction';
import ProductCatalog from './ProductCatalog/ProductCatalog';
import CommercialMessages from './CommercialMessages/CommercialMessages';
import Solutions from './Solutions/Solutions';
import Partners from './Partners/Partners';
import Testimonials from './Testimonials/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduciton />
      <ProductCatalog />
      <CommercialMessages />
      <Solutions />
      <Partners />
      <Testimonials />
    </main>
  )
}
