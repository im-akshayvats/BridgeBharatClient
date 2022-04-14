import React from 'react';
import { Container } from '@mui/material';

import Canvas from './Canvas/Canvas';

import './style.scss';

export default function Introduction() {
  return (
    <section className="introduction">
      <Canvas />
      <Container className='introductionWrapper'>
        Introduction
      </Container>
    </section>
  )
}
