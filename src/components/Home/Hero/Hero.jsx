import React from 'react';
import { Typography, Box, Button, Container } from '@mui/material';

import './style.scss';

const heroOne = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/heroOne.png';
const heroTwo = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/heroTwo.png';

export default function Hero() {
  return (
    <section className="hero section">
      <div className="alert">
        <a href="https://issuu.com/bridgebharat/docs/bridge_bharat_vrittam_final" target="_blank" rel="noopener noreferrer">
          BridgeBharat VRITTAM REPORT out now. Click here to read it!
        </a>
      </div>
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
            <a href="https://docs.google.com/forms/d/1Gmz88QxYzXrMRnHJ3DM0nyUhxk3K3h8PHxT7BTaGo_I/viewform?edit_requested=true" target="_blank" rel="noreferrer">
              <Typography>
                JOIN THE WAITLIST
              </Typography>
            </a>
          </Button>
          <Button variant="outlined" className='connect'>
            <a href="https://wa.me/919910797267" target={'_blank'} rel='noreferrer'>
              <Typography>
                CONNECT
              </Typography>
            </a>
          </Button>
          <Button variant="outlined" className='explore'>
            <a href="https://linktr.ee/bridgebharat" target={'_blank'} rel='noreferrer'>
              <Typography>
                EXPLORE
              </Typography>
            </a>
          </Button>
        </Box>
      </Container>
    </section>
  )
}