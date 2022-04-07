import React, { useEffect, useRef } from 'react';
import { Container, Typography, TextField, Box, Grid } from '@mui/material';
import { Search } from '@mui/icons-material'
import Typed from "typed.js";

import './style.scss';

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Simple, Hassle-free &amp;<br/>Trusted supply",
        "Curated collection of sustainable<br/>products that inspire conversations",
        "Customize collections<br/>unique to your brand"
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 3000,
      smartBackspace: true,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className='hero'>
      <Container className='heroWrapper'>
        <Typography variant='h2' className='typedText'>
          <span ref={el}></span>
        </Typography>
        <Box className='searchEngine'>
          <TextField
            label="Search Products or brands"
            variant="standard"
            fullWidth
          />
          <Search className='searchIcon'/>
        </Box>
        <Box className='catalogCard'>
          <Grid container xs={12}>
            <Grid item xs={4} className='catalogCardContent'>
              <Typography variant='h5'>
                End To End<br />Digital Wholesale 
              </Typography>
            </Grid>
            <Grid item xs={4} className='catalogCardContent'>
              <Typography variant='h5'>
                Easy to use<br />Customization tools
              </Typography> 
            </Grid>
            <Grid item xs={4} className='catalogCardContent'>
              <Typography variant='h5'>
                Exclusive<br />Marketing Content
              </Typography> 
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  )
}
