import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import './style.scss'

export default function MessageTemplate({heading, description, highlightedDescription, video, image}) {
  return (
    <section className="message section">
      <Container className='container'>
        <Box className='content'>
          <Typography variant='h2' className='heading'>
            {heading}
          </Typography>
          <Typography variant='h5' className='description'>
            {description} <span className='fontOrange'>{highlightedDescription}</span>
          </Typography>
        </Box>
        <Box className='videoBox'>
          {
            video ? 
            (<video autoplay="true" muted loop>
              <source src={video} />
            </video>) : 
            <img src={image} alt="pic" />
          }
        </Box>
      </Container>
    </section>
  )
}
