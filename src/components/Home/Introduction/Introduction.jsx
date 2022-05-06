import React from 'react';

import Canvas from './Canvas/Canvas';
import Heading from './Heading/Heading';

import './style.scss';

export default function Introduction() {
  

  return (
    <section className="introduction section">
      <Canvas />
      <Heading />
    </section>
  )
}
