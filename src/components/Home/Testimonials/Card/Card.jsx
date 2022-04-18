import React from 'react';
import { Box, Typography } from '@mui/material';

import './style.scss';
import authorImage from '../../assets/images/reviewAuthor.png';
import upQuote from '../../assets/images/upQuote.png';
import downQuote from '../../assets/images/downQuote.png';

export default function Card({review, author}) {
  return (
    <Box className='cardBox'>
      <Box className='imageBox'>
        <img src={authorImage} alt="AuthorImage" />
        <div className="dot dotOne" />
        <div className="dot dotTwo" />
        <div className="dot dotThree" />
        <div className="dot dotFour" />
        <div className="dot dotFive" />
        <div className="dot dotSix" />
      </Box>
      <Box className='contentBox'>
        <img src={downQuote} alt="Quote" className='downQuote'/>
        <Typography variant='h6' className='review'>
          {review}
        </Typography>
        <Typography variant='h5' className='author'>
          {author}
        </Typography>
        <img src={upQuote} alt="Quote" className='upQuote'/>
      </Box>
    </Box>
  )
}