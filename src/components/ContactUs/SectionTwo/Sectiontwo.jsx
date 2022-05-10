import React from 'react';
import { Typography, Box, Button, Container } from '@mui/material';


import './Style.scss';


const Sectiontwo = () => {
    return (
      <div>
        <p className='sectiontwo'>Are you a <span>homegrown</span> label looking to make it big globally?</p>

        <p className='sectiontwo_Heading'>Collaborate <br/> with us</p>

        <div className='ContactusButton'>
          <Button variant="outlined" className='join'>
            <Typography>
            EMAIL US NOW
            </Typography>
          </Button>
        </div>
          
          </div>
    )
  }
  
  export default Sectiontwo


