import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Box } from '@mui/material';

import './style.scss';

const partnerOne = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/partnerOne.png';
const partnerTwo = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/partnerTwo.png';
const partnerThree = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/partnerThree.png';
const partnerFour = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/partnerFour.png';
const partnerFive = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/partnerFive.png';

export default function Partners() {
  const [slides , setSlides] = useState(4);

  useEffect(() => {
    if (window.outerWidth < 720) {
      setSlides(2);
    }
    window.addEventListener('resize', () => {
      if (window.outerWidth > 720) {
        setSlides(4);
      } else {
        setSlides(2);
      }
    });
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <section className="partners section">
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
