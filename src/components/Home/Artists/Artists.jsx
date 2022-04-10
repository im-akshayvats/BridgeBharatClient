import React from 'react'
import { Button, Container, Grid, Typography } from '@mui/material';
import Slider from "react-slick";
import Artist from './Artist/Artist';

import './style.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Artists() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };
  return (
    <section className="artists">
      <Container sx={{mt: 16}} className='artistsContainer'>
        <Grid container>
          <Grid item xs={5} className='artistsContent'>
            <Typography variant='h2' className='artistsHeading'>
              Lorem Ipsum illum dolore eu feugiat nulla facilisis 
            </Typography>
            <Button variant='outlined'>
              Learn More
            </Button>
          </Grid>
          <Grid item xs={7}>
            <Slider {...settings}>
              <Artist 
                name='SHRUTI AAGRAWAL'
                description={'Lorem Ipsum illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim. Feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim'}
                image='Picture'
              />
              <Artist 
                name='SHRUTI AAGRAWAL'
                description={'Lorem Ipsum illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim. Feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim'}
                image='Picture'
              />
              <Artist 
                name='SHRUTI AAGRAWAL'
                description={'Lorem Ipsum illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim. Feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim'}
                image='Picture'
              />
              <Artist 
                name='SHRUTI AAGRAWAL'
                description={'Lorem Ipsum illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim. Feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim'}
                image='Picture'
              />
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}