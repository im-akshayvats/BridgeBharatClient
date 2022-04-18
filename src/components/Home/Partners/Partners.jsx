import React from 'react';
import Slider from "react-slick";
import { Box } from '@mui/material';

import './style.scss';
import partnerOne from '../assets/images/partnerOne.png';
import partnerTwo from '../assets/images/partnerTwo.png';
import partnerThree from '../assets/images/partnerThree.png';
import partnerFour from '../assets/images/partnerFour.png';
import partnerFive from '../assets/images/partnerFive.png';

export default function Partners() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <section className="partners">
        <Slider {...settings}>
          <div>
            <Box className='imageContainer'>
              <img src={partnerOne} alt="PartnerLogo" className='partnerImage' />
            </Box>
          </div>
          <div>
            <Box className='imageContainer'>
              <img src={partnerTwo} alt="PartnerLogo" className='partnerImage' />
            </Box>
          </div>
          <div>
            <Box className='imageContainer'>
              <img src={partnerThree} alt="PartnerLogo" className='partnerImage' />
            </Box>
          </div>
          <div>
            <Box className='imageContainer'>
              <img src={partnerFour} alt="PartnerLogo" className='partnerImage' />
            </Box>
          </div>
          <div>
            <Box className='imageContainer'>
              <img src={partnerFive} alt="PartnerLogo" className='partnerImage' />
            </Box>
          </div>
        </Slider>
    </section>
  );
}
