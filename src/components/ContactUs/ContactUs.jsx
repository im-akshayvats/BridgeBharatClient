import React from 'react';
import Sectionone from './SectionOne/Sectionone';
import Sectiontwo from './SectionTwo/Sectiontwo';
import border from './assests/leftborder.png';
import image from './assests/imageone.png';
import leaf from './assests/leaf.png';
import lotus from './assests/lotus.png';

import './style.scss';

const ContactUs = () => {
  return (

    <div className="contactus_container"> 
    <img src ={border} alt="contactusborder" className="leftborder" />

      <Sectionone />
          <img src= {image} alt ="contact" className="imageone" />
          <img src={lotus} alt="lotus" className='lotus'/>
          <img src ={border} alt="contactusborder" className="imagetwo" />
        <img src ={border} alt="contactusborder" className="rightborder" />
        <img src= {image} alt ="contact" className="imagesix" />
        <img src ={border} alt="contactusborder" className="imagethree" />
        <img src= {leaf}  className="leaf"/>
        <img src= {leaf}  className="leaftwo"/>



      <Sectiontwo />
    </div>
  )
}

export default ContactUs