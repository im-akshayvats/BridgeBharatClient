import React from 'react';

import MessageTemplate from './MessageTemplate/MessageTemplate';

import './style.scss';

const endToEnd = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/endToEndImage.png';
const customization = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/customization.gif';
const marketing = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/marketing.png';

export default function CommercialMessages() {
  return (
    <section className="commercialMessages">
      <MessageTemplate
        heading={'End-To-End Wholesale'}
        description={'Leave us to do heavy lifting while you focus on you.'}
        highlightedDescription={'Experience the ease of digital wholesale ecosystem'}
        image={endToEnd}
      />
      <MessageTemplate
        heading={'Easy to use customization tools'}
        description={'Customize products that tell the story of your brand.'}
        highlightedDescription={' You understand your market, we understand you.'}
        image={customization}
      />
      <MessageTemplate
        heading={'Exclusive Marketing Collateral'}
        description={'Get access to detailed legacy guides of your favorite products.'}
        highlightedDescription={' Offer your customers a complete experience of India.'}
        image={marketing}
      />
    </section>
  )
}
