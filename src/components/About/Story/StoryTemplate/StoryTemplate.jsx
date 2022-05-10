import React from 'react';
import { Container, Typography } from '@mui/material';

import './style.scss'

export default function StoryTemplate({image, heading, story}) {
  return (
    <section className="storyTemplateSection section">
      <Container className="container">
        <div className="imageContainer">
          <img src={image} alt="" />
        </div>
        <div className="contentContainer">
          <Typography variant="h1" className="heading">
            {heading}
          </Typography>
          <Typography variant="h6" className="story">
            {story}
          </Typography>
        </div>
      </Container>
    </section>
  )
}
