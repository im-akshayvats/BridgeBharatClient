import React, { useState, useRef, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom'

import './style.scss';

const logo = 'https://bridge-bharat.s3.amazonaws.com/images/global/logo.svg';

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
    if (isOpen) {
      header.current.style.height = '100vh'
      smallNavigation.current.style.height = '80vh';
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
          <Typography variant='h6' className='navLink'>ABOUT US</Typography>
          <Typography variant='h6' className='navLink'>CATALOG</Typography>
          <Link to='/contact'>
            <Typography variant='h6' className='navLink'>CONTACT US</Typography>
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
