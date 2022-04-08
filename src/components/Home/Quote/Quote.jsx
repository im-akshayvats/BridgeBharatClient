import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import './style.css';
import './style.scss';

export default function Quote() {
  return (
    <section className="quote">
      <Container maxWidth={'md'} className='quoteContainer' sx={{pb: 16}}>
        <Box className='quoteImage'>

        </Box>
        <Box className='quoteContent'>
          <Typography variant='h5' className='quoteText'>
            Ttinxacidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrut accums]sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euis
          </Typography>
        </Box>
      </Container>
    </section>
  )
}
