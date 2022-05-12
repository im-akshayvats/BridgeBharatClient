import React from 'react';
import { Typography, Box, Button, Container } from '@mui/material';

import './style.scss';

const heroOne = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/heroOne.png';
const heroTwo = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/heroTwo.png';

export default function Hero() {
  return (
    <section className="hero section">
      <Container className='heroContainer'>
        <Typography variant='h4' className='smallHeading'>
          YOUR<br/><span className='desi'>DESI</span><br/>WHOLESALE<br/>PARTNER
        </Typography>
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