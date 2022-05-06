import React, { useState, useRef, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom'

import './style.scss';

const logo = 'https://d2dm1r7c3wtyk.cloudfront.net/images/global/logo.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    if (isOpen) {
      return setIsOpen(false)
    }
    return setIsOpen(true)
  };
  const smallNavigation = useRef(null);
  const header = useRef(null);

  useEffect(() => {
    let scrollValue;
    if (isOpen) {
      header.current.style.height = '100vh'
      smallNavigation.current.style.height = '80vh';
      setTimeout(() => {
        header.current.style.position = 'fixed';
      }, 10)
    } else {
      header.current.style.height = 'unset'
      smallNavigation.current.style.height = '0px';
    }
    window.addEventListener('resize', () => {
      if (window.outerWidth > 720) {
        if (isOpen) {
          header.current.style.height = 'unset';
          smallNavigation.current.style.height = '0px';
          setIsOpen(false);
        }
      }
    })
    window.addEventListener('scroll', () => {
      if (scrollValue < window.scrollY) {
        let styles = {
          "top": "0",
          "paddingTop": "1px"
        }
        Object.assign(header.current.style, styles);
        isOpen ? header.current.style.position = 'fixed' : header.current.style.position = 'absolute';
        scrollValue = window.scrollY;
      } else {
        let styles = {
          "position": "fixed",
          "top": "0"
        }
        Object.assign(header.current.style, styles);
        scrollValue = window.scrollY
      }
    })
  })

  return (
    <header ref={header}>
      <Container className="navBarContainer">
        <div className="hamburger" onClick={handleClick}>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
          <div className="layer"></div>
        </div>
        <nav>
          <Typography variant='p' className='navLink'>ABOUT US</Typography>
          <Typography variant='p' className='navLink'>CATALOG</Typography>
          <Link to='/contact'>
            <Typography variant='p' className='navLink'>CONTACT US</Typography>
          </Link>
        </nav>
        <Link to='/'>
          <img src={logo} alt="BBLogo" />
        </Link>
      </Container>
        <nav className='smallNavigation' ref={smallNavigation}>
          <Typography variant='h6' className='navLink'>ABOUT US</Typography>
          <Typography variant='h6' className='navLink'>CATALOG</Typography>
          <Link to='/contact'>
            <Typography variant='h6' className='navLink'>CONTACT US</Typography>
          </Link>
        </nav>
    </header>
  )
}
