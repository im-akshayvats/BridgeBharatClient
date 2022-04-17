import React from 'react'
import { Box, Typography, Container } from '@mui/material';

import './style.scss';

export default function Slide({image, title, description}) {
  return (
    <Box className='slideContent'>
      <img src={image} alt="Background" className='slideBackground'/>
      <Box className='slideContentWrapper'>
        <Typography variant='h1' className='slideHeading'>
          {title}
        </Typography>
        <Box className='slideDescription'>
          <Container className='slideDescriptionContainer'>
            <Typography variant='h4'>
              {description}
            </Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}