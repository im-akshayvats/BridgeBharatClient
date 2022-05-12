import React from 'react';

import SectionOne from './SectionOne/SectionOne';
import Motive from './Motive/Motive';
import Vision from './Vision/Vision';
import Mission from './Mission/Mission';
import Team from './Team/Team';

export default function About() {
  return (
    <main>
      <SectionOne />
      <Motive />
      <Vision />
      <Mission />
      <Team />
    </main>
  )
}