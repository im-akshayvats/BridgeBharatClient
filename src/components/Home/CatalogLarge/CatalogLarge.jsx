import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';

import './style.scss';

export default function CatalogLarge() {
  return (
    <section className="catalogLarge">
      <Container className='catalogCard'>
        <Grid container xs={12}>
          <Grid item xs={4} p={5} className='catalogCardContent'>
            <Typography variant='h6'>
              End To End<br />Digital Wholesale 
            </Typography>
          </Grid>
          <Grid item xs={4} p={5} className='catalogCardContent'>
            <Typography variant='h6'>
              Easy to use<br />Customization tools
            </Typography> 
          </Grid>
          <Grid item xs={4} p={5}>
            <Typography variant='h6' className='catalogCardContent'>
              Exclusive<br />Marketing Content
            </Typography> 
          </Grid>
        </Grid>
      </Container>
      <Container sx={{paddingBottom: 16}}>
        <Grid container>
          <Grid container item xs={6}>
            <Grid item xs={12}>
              <Box bgcolor={'#193166'} height={706} borderRadius={10} m={2}>

              </Box>
              <Typography marginX={4} height={140}>
                Lorem ipsum | dolor sit amet, cons ectetuer adipiscing elit, sed diam nonumm.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box bgcolor={'#193166'} height={283} borderRadius={10} m={1}>

              </Box>
            </Grid>
          </Grid>
          <Grid container item xs={6}>
            <Grid item xs={6}>
              <Box bgcolor={'#193166'} height={283} borderRadius={10} m={1}>

              </Box>
              <Typography marginX={4} height={130}>
                Lorem ipsum | dolor sit amet, cons ectetuer adipiscing elit, sed diam nonumm.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Box bgcolor={'#193166'} height={283} borderRadius={10} m={1}>

              </Box>
              <Typography marginX={4} height={130}>
                Lorem ipsum | dolor sit amet, cons ectetuer adipiscing elit, sed diam nonumm.
              </Typography>
            </Grid><Grid item xs={6}>
              <Box bgcolor={'#193166'} height={283} borderRadius={10} m={1}>

              </Box>
              <Typography marginX={4} height={150}>
                Lorem ipsum | dolor sit amet, cons ectetuer adipiscing elit, sed diam nonumm.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Box bgcolor={'#193166'} height={283} borderRadius={10} m={1}>

              </Box>
              <Typography marginX={4} height={150}>
                Lorem ipsum | dolor sit amet, cons ectetuer adipiscing elit, sed diam nonumm.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box bgcolor={'#193166'} height={283} borderRadius={10} m={1}>

              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
