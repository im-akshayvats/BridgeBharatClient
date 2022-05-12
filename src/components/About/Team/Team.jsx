import React from 'react';
import { Container, Typography } from '@mui/material';

import './style.scss';
import Member from './Member/Member';

const aakanksha = 'https://d2dm1r7c3wtyk.cloudfront.net/images/about/aakanksha.png'

export default function Team() {
  return (
    <section className="teamSection section">
      <Container className="container">
        <div className="title">
          <Typography variant="h2" className="text">
            Team
          </Typography>
        </div>
        <div className="membersContainer">
          <Member
            image={aakanksha}
            name="AAKANKSHA SINGH"
            designation={'Founder'}
          />
          <Member
            image={aakanksha}
            name="AAKANKSHA SINGH"
            designation={'Founder'}
          />
          <Member
            image={aakanksha}
            name="AAKANKSHA SINGH"
            designation={'Founder'}
          />
          <Member
            image={aakanksha}
            name="AAKANKSHA SINGH"
            designation={'Founder'}
          />
          <Member
            image={aakanksha}
            name="AAKANKSHA SINGH"
            designation={'Founder'}
          />
          <Member
            image={aakanksha}
            name="AAKANKSHA SINGH"
            designation={'Founder'}
          />
          <Member
            image={aakanksha}
            name="AAKANKSHA SINGH"
            designation={'Founder'}
          />
          <Member
            image={aakanksha}
            name="AAKANKSHA SINGH"
            designation={'Founder'}
          />
        </div>
      </Container>
    </section>
  )
}
