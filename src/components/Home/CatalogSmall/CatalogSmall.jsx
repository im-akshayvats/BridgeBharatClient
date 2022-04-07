import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';

import './style.scss';

export default function CatalogSmall() {
  return (
    <section className="catalogSmall">
      <Container sx={{paddingY: 16}}>
        <Grid container>
          <Grid container item>
            <Grid item xs={3} p={1}>
              <Box className='catalogSmallImageHolder'>
                
              </Box>
              <Typography mt={'15px'} mx={4}>
                Lorem ipsum | dolor sit amet, cons ectetuer adipiscing elit, sed diam nonumm.
              </Typography>
            </Grid>
            <Grid item xs={3} p={1}>
              <Box className='catalogSmallImageHolder'>
                
              </Box>
              <Typography mt={'15px'} mx={4}>
                Lorem ipsum | dolor sit amet, cons ectetuer adipiscing elit, sed diam nonumm.
              </Typography>
            </Grid>
            <Grid item xs={3} p={1}>
              <Box className='catalogSmallImageHolder'>
                
              </Box>
              <Typography mt={'15px'} mx={4}>
                Lorem ipsum | dolor sit amet, cons ectetuer adipiscing elit, sed diam nonumm.
              </Typography>
            </Grid>
            <Grid item xs={3} p={1}>
              <Box className='catalogSmallImageHolder'>
                
              </Box>
              <Typography mt={'15px'} mx={4}>
                Lorem ipsum | dolor sit amet, cons ectetuer adipiscing elit, sed diam nonumm.
              </Typography>
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item xs={6} p={1}>
              <Box className='catalogSmallImageHolder'>
                
              </Box>
            </Grid>
            <Grid item xs={6} p={1}>
              <Box className='catalogSmallImageHolder'>
                
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}