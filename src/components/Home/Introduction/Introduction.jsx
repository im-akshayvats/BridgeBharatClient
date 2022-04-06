import React from 'react';
import { Box, Typography } from '@mui/material'

import './style.scss';
import IntroductionLogo from '../assets/images/introductionLogo.svg'

export default function Introduction() {
  return (
    <section className="introduction">
      <Box className='introductionLogo'>
        <img src={IntroductionLogo} alt="Logo" />
      </Box>
      <Typography variant='h1' mt={2} color='#E08B19'>
        Bridge Bharat is
      </Typography>
    </section>
  )
}
