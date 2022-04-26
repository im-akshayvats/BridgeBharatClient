import React, { useRef, useState, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { ExpandMore } from '@mui/icons-material'

import './style.scss';
import Product from './Product/Product';
import candleStands from '../assets/images/candleStands.svg';
import lamps from '../assets/images/lamps.svg';
import vases from '../assets/images/vases.svg';
import plates from '../assets/images/plates.svg';
import mirror from '../assets/images/mirror.svg';

export default function ProductCatalog() {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    if (expanded) {
      return setExpanded(false);
    }
    return setExpanded(true);
  }
  const productList = useRef(null);
  const toggleButton = useRef(null);

  useEffect(() => {
    const productSection = document.querySelector('.productCatalog');
    if (expanded) {
      productList.current.style.height = '2070px';
      toggleButton.current.style.transform = 'rotate(180deg)'
    } else {
      productList.current.style.height = '440px';
      toggleButton.current.style.transform = 'rotate(0deg)'
      productSection.scrollIntoView({behavior: 'smooth'});
    }
  })

  return (
    <section className="productCatalog">
      <Container maxWidth='xl' className='productsContainer'>
        <Typography variant='h4' className='heading'>
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
    </section>
  )
}
