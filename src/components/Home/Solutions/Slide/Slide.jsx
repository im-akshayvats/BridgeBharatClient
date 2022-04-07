import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material';

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
            <Typography variant='h5' width={'75%'}>
              {description}
            </Typography>
          </Container>
          <Button variant="contained">Know More</Button>
        </Box>
      </Box>
    </Box>
  )
}
