import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import './style.scss';

const blueLogo = 'https://bridge-bharat.s3.amazonaws.com/images/home/blue.svg';
const orangeLogo = 'https://bridge-bharat.s3.amazonaws.com/images/home/orange.svg'
const yellowLogo = 'https://bridge-bharat.s3.amazonaws.com/images/home/yellow.svg';

export default function Features() {
  return (
    <section className="features">
      <Container>
        <Box className='featuresBox'>
          <div className="feature">
            <img src={blueLogo} alt="Logo" />
            <Typography variant='body1' className='featureName' color={'#CE4C16'}>
              SMALL<br />MoQs
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
              MARKETING<br />COLLATERAL
            </Typography>
          </div>
        </Box>
      </Container>
    </section>
  )
}
