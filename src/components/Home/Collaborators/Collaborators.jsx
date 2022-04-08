import React from 'react';
import { Container, Box, Button } from '@mui/material';

import './style.css';
import './style.scss'
import partnerImage from '../assets/images/partnerImage.svg';

export default function Collaborators() {
  return (
    <section className="collaborators">
      <Container className='collaboratorsContainer' sx={{pt: 16}}>
        <Box className='collaboratorsImages'>
          <Box className='collaboratorImage'>
            <img src={partnerImage} alt="Partner Logo" />
          </Box>
          <Box className='collaboratorImage'>
            <img src={partnerImage} alt="Partner Logo" />
          </Box>
          <Box className='collaboratorImage'>
            <img src={partnerImage} alt="Partner Logo" />
          </Box>
        </Box>
        <Button variant="outlined" sx={{px: 6}}>Collaborate with us</Button>
      </Container>
    </section>
  )
}
