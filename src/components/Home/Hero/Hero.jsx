import React from 'react';
import { Typography, Box, Button, Container } from '@mui/material';

import './style.scss';

import heroOne from '../../../assets/heroOne.png';
import heroTwo from '../../../assets/heroTwo.png';

export default function Hero() {
  return (
    <section className="hero section">
      <Container className='heroContainer'>
        <Box className='heroBannerBox'>
          <div className='heroBannerOne'>
            <img src={heroOne} alt="banner" />
          </div>
          <div className='heroBannerHeading'>
            <Typography variant='h4' className='heading'>
              YOUR<br/><span className='desi'>DESI</span><br/>WHOLESALE<br/>PARTNER
            </Typography>
          </div>
          <div className='heroBannerTwo'>
            <img src={heroTwo} alt="banner" />
          </div>
        </Box>
        <Typography variant='h6' className='subHeading'>
          INDIAN HANDCRAFTED PRODUCTS FROM 4000+ ARTISANAL COMMUNITIES
        </Typography>
        <Box className='buttonContainer'>
          <Button variant="outlined" className='join'>
            <Typography>
              JOIN THE WAITLIST
            </Typography>
          </Button>
          <Button variant="outlined" className='connect'>
            <Typography>
              CONNECT
            </Typography>
          </Button>
          <Button variant="outlined" className='explore'>
            <Typography>
              EXPLORE
            </Typography>
          </Button>
        </Box>
      </Container>
    </section>
  )
}