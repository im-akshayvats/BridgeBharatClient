import React from 'react';

import Group from '../Container/Group.png';
import Feature from '../../Home/ProductCatalog/Features/Features.jsx'
import './style.scss';

const Aboutsection = () => {
  return (
  <div>
    <div className="aboutimg">
        <img src = {Group} />
    </div>

    <div className="sectiontext">
        <p>YOUR SOURCING & WHOLESALE PARTNER FOR INDIAN <br />HERITAGE PRODUCTS AND ART</p>
    </div>
    <Feature />
    </div>


  )
}

export default Aboutsection