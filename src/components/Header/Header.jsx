import React from 'react';
import { Container, Typography } from '@mui/material';

import './style.scss';
import logo from '../assets/images/logo.svg'

export default function Header() {
  return (
    <Container>
      <header>
        <nav>
          <Typography variant='h6' className='navLink'>ABOUT US</Typography>
          <Typography variant='h6' className='navLink'>CATALOG</Typography>
          <Typography variant='h6' className='navLink'>CONTACT US</Typography>
        </nav>
        <img src={logo} alt="BBLogo" />
      </header>
    </Container>
  )
}
