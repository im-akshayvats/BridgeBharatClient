import React from 'react';
import { Container, Typography } from '@mui/material';

import './style.scss';

const visionLogo = 'https://d2dm1r7c3wtyk.cloudfront.net/images/about/visionLogo.png'

export default function Vision() {
  return (
    <section className="visionSection section">
      <Container className="container">
        <div className="imageContainer">
          <img src={visionLogo} alt="visionLogo" />
        </div>
        <div className="content">
          <Typography variant="h1" className="heading">
            Vision
          </Typography>
          <Typography variant="h6" className="description">
            Our VISION is for Bridge Bharat & its partners to become leaders in driving positive change in the artisanal economy and trade of Indian handicrafts by simplifying discovery, supply chains and process of customization with our digital tools and services.
          </Typography>
        </div>
      </Container>
    </section>
  )
}