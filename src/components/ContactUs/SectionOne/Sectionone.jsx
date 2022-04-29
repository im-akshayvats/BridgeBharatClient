import React from 'react';
import Contactus from '../assests/Contactus.png';
import { Typography, Box, Button, Container } from '@mui/material';
import WhatsAppIcon from '../assests/WhatsApp.png';


import './style.scss';



const Sectionone = () => {


  return (

    <div>
      
        <p className='Contactus_Heading'>Looking to source Indian <br/>Local Products?</p>

        <div className="contactus_img">
          <img src ={Contactus}  />
        </div>
        <p className="Contactus_text">Start you journey now with us!</p>

        <div className='ContactusButton'>
          <Button variant="outlined" className='join'>
            <Typography>
            GET IN TOUCH
            </Typography>
          </Button>
          <div class="animate-charcter"> Talk directly to <br/> our representative  </div>
          <img src = {WhatsAppIcon}  className="WhatsAppIcon" />
          

          </div>



        </div>

  )
}

export default Sectionone
