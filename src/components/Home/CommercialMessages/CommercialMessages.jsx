import React from 'react';

import MessageTemplate from './MessageTemplate/MessageTemplate';

import './style.scss';
import endToEnd from '../assets/images/endToEndImage.png';
import customization from '../assets/images/customization.gif';
import marketing from '../assets/images/marketing.gif';

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
        description={'From our grassroot research and relationships, get access to our detailed guide of history and process behind the making of the product.'}
        highlightedDescription={'Offer your customer a complete experience of Indian products'}
        image={marketing}
      />
    </section>
  )
}
