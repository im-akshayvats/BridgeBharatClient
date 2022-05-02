import React from 'react';

import { Container, Typography, Button } from '@mui/material';

import './style.scss';

const border = 'https://bridge-bharat.s3.amazonaws.com/images/contact/border.png';
const cowCart = 'https://bridge-bharat.s3.amazonaws.com/images/contact/cowCart.png';
const whatsAppIcon = 'https://bridge-bharat.s3.amazonaws.com/images/contact/whatsAppIcon.png';

export default function SectionOne() {
  return (
    <section className="sectionOne">
      <img src={border} alt="cowCart" />
      <Container className="container">
        <Typography variant="h3" className="heading">
          Looking to source Indian<br />Local Products?
        </Typography>
        <img src={cowCart} alt="cowCart" className="cowCartImage" />
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