import React from 'react';

import Hero from './Hero/Hero';
import Introduciton from './Introduction/Introduction';
import Features from './Features/Features';
import CommercialMessages from './CommercialMessages/CommercialMessages';
import Solutions from './Solutions/Solutions';
import Partners from './Partners/Partners';
import Testimonials from './Testimonials/Testimonials';
import Footer from '../Footer/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduciton />
      <Features />
      <CommercialMessages />
      <Solutions />
      <Partners />
      <Testimonials />
      <Footer />
    </main>
  )
}
