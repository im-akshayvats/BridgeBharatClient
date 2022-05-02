import React from 'react';

import { Container, Typography, Button } from '@mui/material';

import './style.scss';

const border = 'https://bridge-bharat.s3.amazonaws.com/images/contact/border.png';
const manWithFlower = 'https://bridge-bharat.s3.amazonaws.com/images/contact/manWithFlower.png';
const lotus = 'https://bridge-bharat.s3.amazonaws.com/images/contact/lotus.png';
const leavesAndCow = 'https://bridge-bharat.s3.amazonaws.com/images/contact/leavesAndCow.png';

export default function SectionTwo() {
  return (
    <section className="sectionTwo">
      <img src={border} alt="border" />
      <div className="upperLayer">
        <img src={manWithFlower} alt="manWithFlower" />
        <img src={lotus} alt="lotus" style={{ height: '100px' }}/>
        <img src={manWithFlower} alt="manWithFlower" style={{transform: 'rotateY(180deg)'}}/>
      </div>
      <Container className="container">
        <Typography variant="h6" className="smallHeading">
          Are you a <span className="homegrown">homegrown</span> label looking to make it big globally?
        </Typography>
        <Typography variant="h1" className="heading">
          Collaborate<br />with us
        </Typography>
        <Button variant='outlined' className="btn">
          EMAIL US NOW
        </Button>
      </Container>
      <div className="bottonLeaves">
        <img src={leavesAndCow} alt="cowInLeaves" height={450}/>
        <img src={leavesAndCow} alt="cowInLeaves" style={{ transform: 'rotateY(180deg)'}} height={450}/>
      </div>
      <img src={border} alt="border" />
    </section>
  )
}
