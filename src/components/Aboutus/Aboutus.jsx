import React from 'react';
import mission from './assests/mission.png';
import vision from './assests/vision.png';



import './style.scss';

const Aboutus = () => {
  return (

    <main>
    <section className="visioncontainer section">
      <div className="missionimage">
        <img src = {mission} />
        </div>
    <div className='visiontext'>
      <h1>Vision</h1>
        <p>Our VISION is for Bridge Bharat & 
            its partners to become leaders in
            driving positive change in the
            artisanal economy and trade of
            Indian handicrafts by simplifying discovery, 
            supply chains and process of customization
            with our digital tools and services. </p>
    </div>
    </section>
    
    <img src = {vision} />
    </main>
  )
}

export default Aboutus