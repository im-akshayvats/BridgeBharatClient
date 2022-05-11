import React from 'react';

import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import ContactDetails from './ContactDetails/ContactDetails';

import './style.scss';

export default function Contact() {
  return (
    <main>
      <SectionOne />
      <SectionTwo />
      <ContactDetails />
    </main>
  )
}
