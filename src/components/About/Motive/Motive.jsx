import React from 'react';
import { Container, Typography } from '@mui/material';

import './style.scss';

const blueLogo = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/blue.svg';
const orangeLogo = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/orange.svg'
const yellowLogo = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/yellow.svg';

export default function MobileMotive() {
  return (
    <section className="motiveSection section">
      <Container className="container">
        <div className="motive">
          <img src={blueLogo} alt="blueLogo" />
          <Typography variant='body2' className="name">DIGITAL</Typography>
        </div>
        <div className="motive">
          <img src={orangeLogo} alt="orangeLogo" />
          <Typography variant='body2' className="name">RELIABLE</Typography>
        </div>
        <div className="motive">
          <img src={yellowLogo} alt="yellowLogo" />
          <Typography variant='body2' className="name">RESPONSIBLE</Typography>
        </div>
        <div className="motive">
          <img src={orangeLogo} alt="orangeLogo" />
          <Typography variant='body2' className="name">PERSONAL</Typography>
        </div>
        <div className="motive">
          <img src={blueLogo} alt="blueLogo" />
          <Typography variant='body2' className="name">HANDPICKED</Typography>
        </div>
      </Container>
    </section>
  )
}
