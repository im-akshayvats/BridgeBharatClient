import React from 'react';
import { Typography } from '@mui/material';
import { MailOutline, Phone, LocationOn } from '@mui/icons-material';

import './style.scss';
import Form from  './Form/Form';
import MapContainer from './MapContainer/MapContainer';

export default function ContactDetails() {
  return (
    <section className="contactDetailSection section" id="contact">
      <div className="firstHalf">
        <MapContainer className="mapContainer" />
        <div className="contactInfo">
          <Typography variant="h2" className="heading">Contact Info</Typography>
          <div className="mailAddress info">
            <MailOutline className="icon" />
            <div className="values">
              <Typography variant="h6" className="content">hello@bridgebharat.com</Typography>
              <Typography variant="h6" className="content">aakanksha@bridgebharat.com</Typography>
            </div>
          </div>
          <div className="phoneNumbers info">
            <Phone className="icon" />
            <div className="values">
              <Typography variant="h6" className="content">+91 96175 93663</Typography>
              <Typography variant="h6" className="content">+91 99107 97267</Typography>
            </div>
          </div>
          <div className="location info">
            <LocationOn className="icon" />
            <div className="values">
              <Typography variant="h6" className="content">3rd - 5th floor, Huda City Centre Metro<br />Station, Gurugram, Haryana 122002</Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="secondHalf">
        <Form />
      </div>
    </section>
  )
}
