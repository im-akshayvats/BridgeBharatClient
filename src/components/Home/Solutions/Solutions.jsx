import React from 'react';
import Slider from "react-slick";
import Slide from './Slide/Slide';

import './style.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const sustainable = 'https://bridge-bharat.s3.amazonaws.com/images/home/sustainable.png';
const authentic = 'https://bridge-bharat.s3.amazonaws.com/images/home/authentic.png';
const communityCentric = 'https://bridge-bharat.s3.amazonaws.com/images/home/communityCentric.png';
const handpicked = 'https://bridge-bharat.s3.amazonaws.com/images/home/handpicked.png';

export default function Solutions() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <section className="solutions">
      <Slider {...settings}>
        <Slide
          image={sustainable}
          title='Sustainable'
          description={'We believe in conscious consumption, offering socially and environmentally sustainable products'}
        />
        <Slide
          image={communityCentric}
          title='Community-centric'
          description={'We work closely with artists and designers who bring out the stories of resilience, community and heritage in our products. '}
        />
        <Slide
          image={handpicked}
          title='Handpicked'
          description={'Each product is curated responsibly with assured quality checks'}
        />
        <Slide
          image={authentic}
          title='Authentic'
          description={'We work with value-based brands making each piece unique'}
        />
      </Slider>
    </section>
  )
}