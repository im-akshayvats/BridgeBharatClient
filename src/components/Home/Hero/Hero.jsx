import React, { useEffect, useRef } from 'react';
import { Container, Typography, TextField, Box } from '@mui/material';
import { Search } from '@mui/icons-material'
import Typed from "typed.js";


import './style.scss';

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Simple, Hassle-free &amp;<br>Trusted supply chain",
        "Sentence Two",
        "Sentence Three"
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
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
      </Container>
    </section>
  )
}
