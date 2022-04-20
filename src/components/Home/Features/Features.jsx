import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import './style.scss';
import blueLogo from '../assets/images/blue.svg';
import orangeLogo from '../assets/images/orange.svg';
import yellowLogo from '../assets/images/yellow.svg';

export default function Features() {
  return (
    <section className="features">
      <Container>
        <Box className='featuresBox'>
          <div className="feature">
            <img src={blueLogo} alt="Logo" />
            <Typography variant='body1' className='featureName' color={'#CE4C16'}>
              SMALL<br />MOQs
            </Typography>
          </div>
          <div className="feature">
            <img src={orangeLogo} alt="Logo" />
            <Typography variant='body1' className='featureName' color={'#E08B19'}>
              QUALITY<br />ASSURANCE
            </Typography>
          </div>
          <div className="feature">
            <img src={yellowLogo} alt="Logo" />
            <Typography variant='body1' className='featureName' color={'#193166'}>
              FREE<br />RETURNS
            </Typography>
          </div>
          <div className="feature">
            <img src={orangeLogo} alt="Logo" />
            <Typography variant='body1' className='featureName' color={'#E08B19'}>
              JOURNEY<br />TRACKING
            </Typography>
          </div>
          <div className="feature">
            <img src={blueLogo} alt="Logo" />
            <Typography variant='body1' className='featureName' color={'#CE4C16'}>
              MARKETING<br />COLLATERALS
            </Typography>
          </div>
        </Box>
      </Container>
    </section>
  )
}
