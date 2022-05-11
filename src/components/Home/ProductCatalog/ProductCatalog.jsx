import React, { useRef, useState, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

import Product from './Product/Product';

import './style.scss';

import Features from './Features/Features';

const candleStands = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/candleStands.svg';
const lamps = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/lamps.svg';
const vases = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/vases.svg';
const plates = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/plates.svg';
const mirror = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/mirror.svg';

export default function ProductCatalog() {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    const productSection = document.querySelector('.productCatalog');
    if (expanded) {
      productSection.scrollIntoView({behavior: 'smooth'});
      return setExpanded(false);
    }
    return setExpanded(true);
  }
  const productCatalog = useRef(null);
  const productList = useRef(null);
  const toggleButton = useRef(null);

  useEffect(() => {
    if (expanded) {
      productCatalog.current.style.height = '1880px';
      productList.current.style.setProperty('height', "1460px", "important");
      toggleButton.current.style.transform = 'rotate(180deg)'
    } else {
      productCatalog.current.style.height = '100vh';
      productList.current.style.height = '260px';
      toggleButton.current.style.transform = 'rotate(0deg)'
    }
  })

  return (
    <section ref={productCatalog} className="productCatalog section">
      <Container className='productsContainer'>
        <Typography variant='h5' className='heading'>
          Handcrafted Products from the Heart of Indian Artisan Community
        </Typography>
        <div className='products' ref={productList}>
          <Product image={candleStands} name={'CANDEL STANDS'}/>
          <Product image={lamps} name={'LAMPS'}/>
          <Product image={vases} name={'VASES'}/>
          <Product image={plates} name={'PLATES'}/>
          <Product image={mirror} name={'MIRRORS'}/>
        </div>
        <div className="toggleButton" ref={toggleButton} onClick={handleClick}>
          <ExpandMore />
        </div>
        <Button variant='outlined' className='viewMoreButton'>explore</Button>
      </Container>
      <Features />
    </section>
  )
}
