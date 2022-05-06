import React from 'react';
import { Typography, Box, Button, Container } from '@mui/material';

import './style.scss';

const banner = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/banner.svg';

export default function Hero() {
  return (
    <section className="hero section">
      <Container className='heroContainer'>
        <img src={banner} alt="Banner" />
        <Typography variant='h3' className='heading'>
          YOUR <span className='desi'>DESI</span> WHOLESALE PARTNER
        </Typography>
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