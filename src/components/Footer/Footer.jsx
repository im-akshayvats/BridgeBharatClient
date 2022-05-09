import React from 'react';
import { Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Instagram, Facebook, LinkedIn, Twitter, Search } from '@mui/icons-material';

import './style.scss';

import footerImage from '../../assets/footerImage.svg';

export default function Footer() {
  return (
    <footer className="section">
      <Container className="container">
        <div className="firstHalf">
          <Typography variant="h3" className="heading">
            Dedicated to the strength and resilience of  the world’s small businesses
          </Typography>
          <div className="socialMedia">
            <Instagram className="icon"/>
            <Facebook className="icon"/>
            <LinkedIn className="icon"/>
            <Twitter className="icon"/>
          </div>
          <Typography variant="p" className="copyright">
            ©BRIDGE BHARAT 2022
          </Typography>
        </div>
        <div className="secondHalf">
          <div className="searchEngine">
            <input type="text" placeholder="Product and brand search...." />
            <Search />
          </div>
          <div className="navigationLinks">
            <NavLink
              to={`/`}
              className='navLink'
            >
              ABOUT US
            </NavLink>
            <NavLink
              to={`/contact`}
              className='navLink'
            >
              CONTACT US
            </NavLink>
            <NavLink
              to={`/`}
              className='navLink'
            >
              EXPLORE
            </NavLink>
            <NavLink
              to={`/`}
              className='term otherLink'
            >
              TERMS & CONDITIONS
            </NavLink>
            <NavLink
              to={`/`}
              className='privacy otherLink'
            >
              PRIVACY POLICY
            </NavLink>
          </div>
        </div>
      </Container>
      <img src={footerImage} alt="footerImage" />
    </footer>
  )
}
