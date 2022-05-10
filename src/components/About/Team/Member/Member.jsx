import React from 'react';
import { Typography } from '@mui/material';

import './style.scss';

export default function Member({image, name, designation}) {
  return (
    <div className="member">
      <img src={image} alt="memberPic" />
      <Typography variant="h6" className="name">
        {name}
      </Typography>
      <Typography variant="p" className="designation">
        {designation}
      </Typography>
    </div>
  )
}
