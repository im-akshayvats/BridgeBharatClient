import React from 'react';
import { Container, Typography } from '@mui/material';

import './style.scss';
import Member from './Member/Member';

const aakanksha = 'https://d2dm1r7c3wtyk.cloudfront.net/images/about/aakanksha.png'
const mansi = 'https://d2dm1r7c3wtyk.cloudfront.net/images/about/mansi.png';
const anupriyaDubey = 'https://d2dm1r7c3wtyk.cloudfront.net/images/about/anupriyaDubey.png'
const durga = 'https://d2dm1r7c3wtyk.cloudfront.net/images/about/durga.png'
const parul = 'https://d2dm1r7c3wtyk.cloudfront.net/images/about/parul.png'
const anisha = 'https://d2dm1r7c3wtyk.cloudfront.net/images/about/anisha.png'
const anupriya = 'https://d2dm1r7c3wtyk.cloudfront.net/images/about/anupriya.png'
const akshay = 'https://d2dm1r7c3wtyk.cloudfront.net/images/about/akshay.png'

export default function Team() {
  return (
    <section className="teamSection section">
      <Container className="container">
        <div className="title">
          <Typography variant="h2" className="text">
            Team
          </Typography>
        </div>
        <div className="members">
          <div className="membersFirstContainer">
            <Member
              image={aakanksha}
              name="AAKANKSHA SINGH"
              designation={'Founder and CEO'}
              className="member"
            />
            <Member
              image={mansi}
              name="MANSI SHEKHAWAT"
              designation={'Operations Lead'}
              className="member"
            />
            <Member
              image={anupriyaDubey}
              name="ANUPRIYA DUBEY"
              designation={'Artist Engagement'}
              className="member"
            />
            <Member
              image={durga}
              name="DURGA VENKATESAN "
              designation={'Social Media Lead'}
              className="member"
            />
          </div>
          <div className="membersSecondContainer">
            <Member
              image={parul}
              name="PARUL SOOD"
              designation={'Marketing and Communications'}
              className="member"
            />
            <Member
              image={anisha}
              name="ANISHA BHUJBAL"
              designation={'Visual Design Lead'}
              className="member"
            />
            <Member
              image={anupriya}
              name="ANUPRIYA"
              designation={'Front-End Developer'}
              className="member"
            />
            <Member
              image={akshay}
              name="AKSHAY VATS"
              designation={'Full Stack Developer'}
              className="member"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
