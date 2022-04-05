import React from 'react';
import { Typography, Box } from '@mui/material';

import Logo from '../assets/Images/logo_white.svg';

import './style.scss';

export default function Loader({percentage}) {
  return (
    <Box className='loadingScreenContent'>
      <img
        src={Logo}
        alt="Logo"
        className='loadingLogo'
        style={{
          height: 144
        }}
      />
      <Typography
        variant='body1'
        className='loadingSubHeading'
        mt={1}
      >
        Experience the ease of digital wholesale buying
      </Typography>
      <Typography
        variant='h1'
        className='loadingPercentage'
        mt={3}
      >
        {percentage}%
      </Typography>
    </Box>
  )
}
