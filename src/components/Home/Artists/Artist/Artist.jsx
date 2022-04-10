import React from 'react';
import { Box, Typography } from '@mui/material';

import './style.scss';

export default function Artist({name, description, image}) {
  return (
    <div className='artistWrapper'>
      <Box className='artistContent'>
        <Typography className='artistName'>
          {name}
        </Typography>
        <Typography className='artistDescription'>
          {description}
        </Typography>
      </Box>
      <Box className='artistPicture'>
        
      </Box>
    </div>
  )
}
