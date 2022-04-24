import React from 'react';
import { Container, Typography, Button } from '@mui/material';

import './style.scss';
import Product from './Product/Product';
import candleStands from '../assets/images/candleStands.svg';
import lamps from '../assets/images/lamps.svg';
import vases from '../assets/images/vases.svg';

export default function ProductCatalog() {
  return (
    <section className="productCatalog">
      <Container maxWidth='xl' className='productsContainer'>
        <Typography variant='h4' className='heading'>
          Handcrafted Products from the Heart of Indian Artisan Community
        </Typography>
        <div className='products'>
          <Product image={candleStands} name={'CANDEL STANDS'}/>
          <Product image={lamps} name={'LAMPS'}/>
          <Product image={vases} name={'VASES'}/>
          <Product name={'PLATES'}/>
          <Product name={'MIRRORS'}/>
        </div>
        <Button variant='outlined' className='viewMoreButton'>view more</Button>
      </Container>
    </section>
  )
}
