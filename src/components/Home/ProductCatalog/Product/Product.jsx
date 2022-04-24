import React from 'react';
import { Typography } from '@mui/material';

import './style.scss';

export default function Product({image, name}) {
  return (
    <div className='productCard'>
      {image ? <img src={image} alt="ProductImage" height={'250px'} width={'250px'}/> : <div className='imagePlaceHolder'/>}
      <Typography variant='h6' className='name'>{name}</Typography>
    </div>
  )
}
