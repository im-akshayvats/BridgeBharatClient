import React from 'react';

import { Container, Typography, Button } from '@mui/material';

import './style.scss';

const border = 'https://d2dm1r7c3wtyk.cloudfront.net/images/contact/border.png';
const manWithFlower = 'https://d2dm1r7c3wtyk.cloudfront.net/images/contact/manWithFlower.png';
const lotus = 'https://d2dm1r7c3wtyk.cloudfront.net/images/contact/lotus.png';
const leavesAndCow = 'https://d2dm1r7c3wtyk.cloudfront.net/images/contact/leavesAndCow.png';

export default function SectionTwo() {
  return (
    <section className="sectionTwo section">
      <img src={border} alt="border" />
      <div className="upperLayer">
        <img src={manWithFlower} alt="manWithFlower" className="manWithFlower" />
        <img src={lotus} alt="lotus" className="lotus" />
        <img src={manWithFlower} alt="manWithFlower" style={{transform: 'rotateY(180deg)'}} className="manWithFlower" />
      </div>
      <Container className="container">
        <Typography variant="h6" className="smallHeading">
          Are you a <span className="homegrown">homegrown</span> label<br />looking to make it big globally?
        </Typography>
        <Typography variant="h1" className="heading">
          Collaborate<br />with us
        </Typography>
        <Button variant='outlined' className="btn">
          <a href="#contact">EMAIL US NOW</a>
        </Button>
      </Container>
      <div className="bottomLeaves">
        <img src={leavesAndCow} alt="cowInLeaves" height={450}/>
        <img src={leavesAndCow} alt="cowInLeaves" style={{ transform: 'rotateY(180deg)'}} height={450}/>
      </div>
      <img src={border} alt="border" />
    </section>
  )
}
