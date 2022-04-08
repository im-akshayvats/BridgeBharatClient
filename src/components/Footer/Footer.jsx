import React from 'react';
import { Typography, Box } from '@mui/material';

import './style.css';
import './style.scss';
import paymentMethod from '../assets/images/paymentMethod.svg'

export default function Footer() {
  return (
    <footer>
      <Typography variant='h6' className='footerLink'>
        Sitemap
      </Typography>
      <Typography variant='h6' className='footerLink'>
        Summary
      </Typography>
      <Typography variant='h6' className='footerLink'>
        T&C
      </Typography>
      <Typography variant='h6' className='footerLink'>
        Copyright
      </Typography>
      <Typography variant='h6' className='footerLink'>
        Contact us
      </Typography>
      <Typography variant='h6' className='footerLink'>
        Social Media
      </Typography>
      <Typography variant='h6' className='footerLink'>
        Payment Information
      </Typography>
      <Typography variant='h6' className='footerLink'>
        Cancellation and refund
      </Typography>
      <Box className='paymentMethodImage'>
        <img src={paymentMethod} alt="Payment Methods" />
      </Box>
    </footer>
  )
}
