import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import './style.scss';

const blueLogo = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/blue.svg';
const orangeLogo = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/orange.svg'
const yellowLogo = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/yellow.svg';

export default function Features() {
  return (
    <Container className="container">
      <Box className='featuresBox'>
        <div className="feature">
          <img src={blueLogo} alt="Logo" />
          <Typography variant='body1' className='featureName' color={'#CE4C16'}>
           DIGITAL
          </Typography>
        </div>
        <div className="feature">
          <img src={orangeLogo} alt="Logo" />
          <Typography variant='body1' className='featureName' color={'#E08B19'}>
           RELIABLE
          </Typography>
        </div>
        <div className="feature">
          <img src={yellowLogo} alt="Logo" />
          <Typography variant='body1' className='featureName' color={'#193166'}>
           RESPONSIBLE
          </Typography>
        </div>
        <div className="feature">
          <img src={orangeLogo} alt="Logo" />
          <Typography variant='body1' className='featureName' color={'#E08B19'}>
           PERSONAL
          </Typography>
        </div>
        <div className="feature">
          <img src={blueLogo} alt="Logo" />
          <Typography variant='body1' className='featureName' color={'#CE4C16'}>
           HANDPICKED
          </Typography>
        </div>
      </Box>
    </Container>
  )
}
