import React from 'react';

import { Container, Typography, Button } from '@mui/material';

import './style.scss';
import border from '../../../assets/border.png';
import cowCart from '../../../assets/cowCart.png';
import whatsAppIcon from '../../../assets/whatsAppIcon.png';

export default function SectionOne() {
  return (
    <section className="sectionOne">
      <img src={border} alt="cowCart" />
      <Container className="container">
        <Typography variant="h3" className="heading">
          Looking to source Indian<br />Local Products?
        </Typography>
        <img src={cowCart} alt="" />
        <Typography variant='h5' className="subHeading">
          Start you journey now with us!
        </Typography>
        <Button variant='outlined' className="btn">
          GET IN TOUCH
        </Button>
      </Container>
      <img src={border} alt="cowCart" />
      <div className="whatsAppContainer">
        <Typography variant="h6" className="whatsAppContent">
          Talk directly to<br />our representative
        </Typography>
        <img src={whatsAppIcon} alt="whatsAppIcon" />
      </div>
    </section>
  )
}