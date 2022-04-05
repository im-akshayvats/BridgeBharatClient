import React from 'react';
import { Container, Box, Typography } from '@mui/material';

import './style.scss';
import navBarLogo from '../assets/images/logo_blue.svg'

export default function Header() {
  return (
    <header style={{backgroundColor: '#FCF6F0'}}>
      <Container className='navBar'>
        <Box
          className='navTab'
          paddingY={3}
        >
          <Typography variant='h6' className='navLink'>About</Typography>
          <Typography variant='h6' className='navLink'>Catalog</Typography>
          <Box className='navLogo'height={57}>
            <img src={navBarLogo} alt="Logo" />
          </Box>
          <Typography variant='h6' className='navLink'>Customize</Typography>
          <Typography variant='h6' className='navLink'>Culture</Typography>
        </Box>
      </Container>
    </header>
  )
}
