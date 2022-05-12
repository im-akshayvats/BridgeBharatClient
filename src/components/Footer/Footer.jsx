import React from 'react';
import { Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Instagram, Facebook, LinkedIn, Twitter, Search } from '@mui/icons-material';

import './style.scss';

const footerImage = 'https://d2dm1r7c3wtyk.cloudfront.net/images/global/footerImage.svg';

export default function Footer() {
  return (
    <footer className="section">
      <Container className="container">
        <div className="firstHalf">
          <Typography variant="h3" className="heading">
            Dedicated to the strength and resilience of  the world’s small businesses
          </Typography>
          <div className="socialMedia">
            <a href="https://www.instagram.com/bridgebharat/" target="_blank" rel="noopener noreferrer">
              <Instagram className="icon"/>
            </a>
            <a href="https://www.facebook.com/bridgeinbharat" target="_blank" rel="noopener noreferrer">
            < Facebook className="icon"/>
            </a>
            <a href="https://www.linkedin.com/company/bridge-bharat/" target="_blank" rel="noopener noreferrer">
              <LinkedIn className="icon"/>
            </a>
            <a href="https://twitter.com/BharatBridge" target="_blank" rel="noopener noreferrer">
              <Twitter className="icon"/>
            </a>
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
              to={`/about`}
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
            <a
              href='https://linktr.ee/bridgebharat'
              target='_blank'
              rel='noopener noreferrer'
              className='navLink'
            >
              EXPLORE
            </a>
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
