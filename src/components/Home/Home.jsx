import React from 'react';
import { Container } from '@mui/material';

import Hero from './Hero/Hero';
import Introduciton from './Introduction/Introduction';

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
        <Introduciton />
      </Container>
    </main>
  )
}
