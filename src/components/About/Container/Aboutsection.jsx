import React from 'react';

import Group from '../Container/Group.png';
import Aboutfeature from '../Container/Aboutfeature';
import './style.scss';

const Aboutsection = () => {
  return (
  <div className= "section">
    <div className="aboutimg">
        <img src = {Group} />
    </div>

    <div className="sectiontext">
        <p>YOUR SOURCING & WHOLESALE PARTNER FOR INDIAN <br />HERITAGE PRODUCTS AND ART</p>
    </div>
    <Aboutfeature />
    </div>


  )
}

export default Aboutsection