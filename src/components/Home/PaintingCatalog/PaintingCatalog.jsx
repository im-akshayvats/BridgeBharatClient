import React, { useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

import './style.scss';
import couch from '../assets/images/sofa.svg';
import one from '../assets/images/one.png';
import two from '../assets/images/two.png';
import three from '../assets/images/three.png';
import four from '../assets/images/four.png';
import five from '../assets/images/five.png';

export default function PaintingCatalog() {

  useEffect(() => {
    const elements = document.querySelectorAll('.paintingImage');
    elements.forEach(element => {
      element.addEventListener('mouseover', () => {
        elements.forEach(element => {
          element.style.filter = 'blur(2.5px)';
        });
        element.style.filter = 'blur(0px)'
      });
      element.addEventListener('mouseout', () => {
        elements.forEach(element => {
          element.style.filter = 'blur(0px)'
        })
      })
    })
  })

  return (
    <section className="productCatalog">
      <Container className='catalogContainer'>
        <Typography variant='h4' className='catalogHeading'>
          Inimitable Indian Traditional Art from the Masters<br />made with Natural Pigments
        </Typography>
        <Box className='paintingsContainer'>
          <div className="imageContainer firstContainer">
            <div className='paintingImageContainer'>
              <img className='paintingImage' src={one} alt="Painting" width={105}/>
              <div className="paintingMiniInfo">
                Name
              </div>
            </div>
            <img className='paintingImage' src={two} alt="Painting" width={200}/>
          </div>
          <div className="imageContainer secondContainer">
            <img className='paintingImage' src={three} alt="Painting" width={150}/>
          </div>
          <div className="imageContainer thirdContainer">
            <img className='paintingImage' src={four} alt="Painting" width={132}/>
            <img className='paintingImage' src={five} alt="Painting" width={132}/>
          </div>
        </Box>
        <Box className='imageButtonBox'>
          <img src={couch} alt="Couch" />
          <Button variant='outlined' className='viewMoreButton'>view more</Button>
        </Box>
      </Container>
    </section>
  )
}
