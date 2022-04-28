import React, { Component } from 'react';
import { Container, Typography } from '@mui/material';

import './style.scss';

const gesture = 'https://bridge-bharat.s3.amazonaws.com/images/home/gesture.svg';
const gestureTwo = 'https://bridge-bharat.s3.amazonaws.com/images/home/gestureTwo.svg';

class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headings: [
        'Seamless, Hassle-free Sourcing',
        'Wholesale Experiences Tailored to your Brand',
        'Heritage Products that Inspire Conversations',
        'Commited to Responsible Sourcing'
      ],
      opacity: 1,
      iterator: 0,
      rotation: 0
    }
    this.headingRef = React.createRef();
    this.beginChange = this.beginChange.bind(this);
  }

  beginChange() {
    setTimeout(() => {
      this.setState({opacity: 0});
      setTimeout(() => {
        this.state.iterator === this.state.headings.length - 1 ? this.setState({iterator: 0}) : this.setState({iterator: this.state.iterator + 1});
        this.setState({rotation: this.state.rotation + 90});
        this.setState({opacity: 1});
        this.beginChange();
      }, 1000)
    }, 5000);
  }

  componentDidMount() {
    this.beginChange();
  }

  render() {
    return (
      <>
        <Container className='introductionWrapper' style={{opacity: this.state.opacity}}>
          <Typography ref={this.headingRef} variant='h1' className='introductionHeading'>
            {this.state.headings[this.state.iterator]}
          </Typography>
        </Container>
        <img className='gestureImage' src={gesture} alt="Gesture" style={{transform: `rotate(${this.state.rotation}deg)`}} />
        <img className='gestureTwoImage' src={gestureTwo} alt="Gesture" />
      </>
    )
  }
}

export default Heading;