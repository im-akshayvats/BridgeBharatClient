import React from 'react';

import './style.scss';

import Hero from './Hero/Hero';
import Introduciton from './Introduction/Introduction';
import PaintingCatalog from './PaintingCatalog/PaintingCatalog';
import Features from './Features/Features';
import CommercialMessages from './CommercialMessages/CommercialMessages';
import Solutions from './Solutions/Solutions';
import ProductCatalog from './ProductCatalog/ProductCatalog';
import Partners from './Partners/Partners';
import Testimonials from './Testimonials/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduciton />
      <ProductCatalog />
      <Features />
      <CommercialMessages />
      <PaintingCatalog />
      <Solutions />
      <Partners />
      <Testimonials />
    </main>
  )
}
