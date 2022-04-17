import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import './style.scss'
// import endToEndVideo from '../../assets/videos/endToEndVideo .m4v'
import endToEndPic from '../../assets/images/endToEndPic.gif'

export default function EndToEnd() {
  return (
    <section className="endToEnd">
      <Container className='endToEndContainer'>
        <Box className='endToEndContent'>
          <Typography variant='h1' className='endToEndHeading'>
            End-To-End<br />Wholesale
          </Typography>
          <Typography variant='h5' className='endToEndDescription'>
          Leave us to do heavy lifting while you focus on you. <span className='fontOrange'>Experience the ease of digital wholesale ecosystem</span>
          </Typography>
        </Box>
        <Box className='endToEndVideoBox'>
          {/* <video autoplay="true" muted loop>
            <source src={endToEndVideo} />
          </video> */}
          <img src={endToEndPic} alt="EndToEndPic" />
        </Box>
      </Container>
    </section>
  )
}
