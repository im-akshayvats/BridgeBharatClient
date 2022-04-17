import React from 'react';
import { Container, Grid, Box } from '@mui/material';

import './style.scss';

export default function ProductCatalog() {
  return (
    <section className="productCatalog">
      <Container>
        <Box  sx={{ flexGrow: 1 }} className='productCatalogBox'>
          <Grid container className='productCatalogContainer'>
            <Grid item container xs={3} className='productCatalogItemContainer'>
              <Grid item xs={12} className='productCatalogItem' style={{height: '60%'}}>
                <Box className='productCatalogItemBox'>
                  
                </Box>
              </Grid>
              <Grid item xs={12} className='productCatalogItem' style={{height: '40%'}}>
                <Box className='productCatalogItemBox'>
                  
                </Box>
              </Grid>
            </Grid>
            <Grid item container xs={6} className='productCatalogItemContainer'>
              <Grid item xs={12} className='productCatalogItem' style={{height: '40%'}}>
                <Box className='productCatalogItemBox'>
                  
                </Box>
              </Grid>
              <Grid item xs={6} className='productCatalogItem' style={{height: '60%'}}>
                <Box className='productCatalogItemBox'>
                  
                </Box>
              </Grid>
              <Grid item xs={6} className='productCatalogItem' style={{height: '60%'}}>
                <Box className='productCatalogItemBox'>
                  
                </Box>
              </Grid>
            </Grid>
            <Grid item container xs={3} className='productCatalogItemContainer'>
              <Grid item xs={12} className='productCatalogItem' style={{height: '60%'}}>
                <Box className='productCatalogItemBox'>
                  
                </Box>
              </Grid>
              <Grid item xs={12} className='productCatalogItem' style={{height: '40%'}}>
                <Box className='productCatalogItemBox'>
                  
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  )
}
