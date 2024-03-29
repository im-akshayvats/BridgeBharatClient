import React from 'react';

import './style.scss';

import Hero from './Hero/Hero';
import Introduciton from './Introduction/Introduction';
import PaintingCatalog from './PaintingCatalog/PaintingCatalog';
import MobileMotive from './MobileMotive/MobileMotive';
import CommercialMessages from './CommercialMessages/CommercialMessages';
import Solutions from './Solutions/Solutions';
import ProductCatalog from './ProductCatalog/ProductCatalog';
import Testimonials from './Testimonials/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduciton />
      <ProductCatalog />
      <MobileMotive />
      <CommercialMessages />
      <PaintingCatalog />
      <Solutions />
      <Testimonials />
    </main>
  )
}
