import React from 'react';
import { Typography, Box, Button } from '@mui/material';

import './style.scss';
import banner from '../assets/images/banner.svg';

export default function Hero() {
  return (
    <section className="hero">
      <img src={banner} alt="Banner" />
      <Typography variant='h3' className='heading'>
        YOUR <span className='desi'>DESI</span> WHOLESALE PARTNER
      </Typography>
      <Typography variant='h6' className='subHeading'>
        INDIAN HANDCRAFTED PRODUCTS FROM 4000+ ARTISANAL COMMUNITIES
      </Typography>
      <Box className='buttonContainer'>
        <Button variant="outlined">
          <Typography>
            Catalog
          </Typography>
        </Button>
        <Button variant="outlined">
          <Typography>
            Customize
          </Typography>
        </Button>
        <Button variant="outlined">
          <Typography>
            Connect
          </Typography>
        </Button>
      </Box>
    </section>
  )
}