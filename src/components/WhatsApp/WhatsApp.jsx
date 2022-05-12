import React from 'react';

import './style.scss';

const whatsAppIcon = 'https://d2dm1r7c3wtyk.cloudfront.net/images/contact/whatsAppIcon.png';

export default function WhatsApp() {
  return (
    <a href="https://wa.me/919910797267" target={'_blank'} rel='noreferrer'>
      <div className="whatsAppContainer">
        <img src={whatsAppIcon} alt="whatsAppIcon" />
      </div>
    </a>
  )
}
