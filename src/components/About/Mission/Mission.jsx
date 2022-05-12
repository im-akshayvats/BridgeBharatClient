import React from 'react';
import { Container, Typography } from '@mui/material';

import './style.scss';

const globe = 'https://d2dm1r7c3wtyk.cloudfront.net/images/about/globe.png'

export default function Mission() {
  return (
    <section className="missionSection section">
      <Container className="container">
        <img src={globe} alt="globe" />
        <div className="content">
          <Typography variant="h1" className="heading">
            Mission
          </Typography>
          <Typography variant="h6" className="description">
            We partner with homegrown heritage Indian brands and local handicraft suppliers to curate a set of quality, authentic Indian artifacts. We are on a MISSION to create a global market of Indian local products, led by overseas small and medium buyers.
          </Typography>
        </div>
      </Container>
    </section>
  )
}
