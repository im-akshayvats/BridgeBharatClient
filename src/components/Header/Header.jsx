import React, { useState, useRef, useEffect } from 'react';
import { Container, Typography } from '@mui/material';

import './style.scss';
import logo from '../assets/images/logo.svg'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    if (isOpen) {
      return setIsOpen(false)
    }
    return setIsOpen(true)
  };
  const smallNavigation = useRef(null);

  useEffect(() => {
    if (isOpen) {
      smallNavigation.current.style.height = '150px';
    } else {
      smallNavigation.current.style.height = '0px';
    }
  })

  return (
    <header>
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
          <Typography variant='h6' className='navLink'>CONTACT US</Typography>
        </nav>
        <img src={logo} alt="BBLogo" />
      </Container>
      <Container>
        <nav className='smallNavigation' ref={smallNavigation}>
          <Typography variant='h6' className='navLink'>ABOUT US</Typography>
          <Typography variant='h6' className='navLink'>CATALOG</Typography>
          <Typography variant='h6' className='navLink'>CONTACT US</Typography>
        </nav>
      </Container>
    </header>
  )
}
