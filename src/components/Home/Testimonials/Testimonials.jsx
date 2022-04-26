import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

import './style.scss';
import Card from './Card/Card';

export default function Testimonials() {
  const [slides , setSlides] = useState(2);

  useEffect(() => {
    if (window.outerWidth < 720) {
      setSlides(1);
    }
    window.addEventListener('resize', () => {
      if (window.outerWidth > 720) {
        setSlides(2);
      } else {
        setSlides(1);
      }
    });
  }, [])
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <section className="testimonials">
      <Slider {...settings}>
        <Card
          review={"We purchased two Phadd 'Tree of Life' paintings from Bridge Bharat. I'm absolutely in love with both of them. Great going, guys! "}
          author={"Viji Chaudhary"}
        />
        <Card
          review={"You guys are doing such important work at archiving Indian art and heritage. We have such a deep culture, I wish everyone gets to witness it! "}
          author={"Aishwarya Gupta"}
        />
        <Card
          review={"The Bridge Bharat art classes take me back to my school art lessons! Such nostalgia "}
          author={"Veera Chaudhary"}
        />
        <Card
          review={"Learning this new Kalamkari folk art was a great experience. The mentor was organized and engaging making complicated artwork easy to understand. Highly recommend this class by Bridge Bharat. "}
          author={"Anupa Paul"}
        />
      </Slider>
    </section>
  );
}
