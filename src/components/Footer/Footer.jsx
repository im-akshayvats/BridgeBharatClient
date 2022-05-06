import React from 'react';
import { Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Instagram, Facebook, LinkedIn, Twitter } from '@mui/icons-material';

import './style.scss'

export default function Footer() {
  return (
    <footer className="section">
      <Container maxWidth='xl' className='footerContainer'>
        <Typography variant='h4' mt={'80px'} className='heading'>
          Dedicated to the strength and resilience of<br />the world’s small businesses
        </Typography>
        <Typography className='copyright' my={'40px'}>
          ©BRIDGE BHARAT 2022
        </Typography>
        <input type="text" placeholder='Product and brand search....' />
        <div className="navigationLinks">
          <NavLink
            to={`/`}
            className='navLink'
          >
            ABOUT US
          </NavLink>
          <NavLink
            to={`/`}
            className='navLink'
          >
            JOIN THE WAITLIST
          </NavLink>
          <NavLink
            to={`/`}
            className='navLink'
          >
            EXPLORE
          </NavLink>
        </div>
        <div className="otherLinks">
          <div className="tc">
            TERMS & CONDITIONS
          </div>
          <div className="socialMediaHandles">
            <Instagram className='socialIcon'/>
            <Facebook className='socialIcon'/>
            <LinkedIn className='socialIcon'/>
            <Twitter className='socialIcon'/>
          </div>
          <div className="pp">
            PRIVACY & POLICY
          </div>
        </div>
      </Container>
    </footer>
  )
}
