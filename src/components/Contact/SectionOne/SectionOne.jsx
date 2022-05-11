import React from 'react';

import { Container, Typography, Button } from '@mui/material';

import './style.scss';

import contactUsGesture from '../../../assets/contactUsGesture.png';
const whatsAppIcon = 'https://d2dm1r7c3wtyk.cloudfront.net/images/contact/whatsAppIcon.png';

export default function SectionOne() {
  return (
    <section className="sectionOne section">
      <Container className="container">
        <Typography variant="h3" className="heading">
          Looking to source Indian<br />Local Products?
        </Typography>
        <img src={contactUsGesture} alt="handGesture" className="gesture" />
        <Button variant='outlined' className="btn">
          GET IN TOUCH
        </Button>
      </Container>
      <div className="whatsAppContainer">
        <Typography variant="h6" className="whatsAppContent">
          Talk directly to<br />our representative
        </Typography>
        <img src={whatsAppIcon} alt="whatsAppIcon" />
      </div>
    </section>
  )
}