import React from 'react';

import StoryTemplate from './StoryTemplate/StoryTemplate';

// import vision from '../../../'
// import globe from '../../../assets/globe.png';

export default function Story() {
  return (
    <>
      <StoryTemplate
        // image={vision}
        heading={'Vision'}
        story={'Our VISION is for Bridge Bharat & its partners to become leaders in driving positive change in the artisanal economy and trade of Indian handicrafts by simplifying discovery, supply chains and process of customization with our digital tools and services.'}
      />
      <StoryTemplate
        // image={globe}
        heading={'Mission'}
        story={'We partner with homegrown heritage Indian brands and local handicraft suppliers to curate a set of quality, authentic Indian artifacts. We are on a MISSION to create a global market of Indian local products, led by overseas small and medium buyers.'}
      />
    </>
  )
}
