import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TextField, Button, Container, Typography } from '@mui/material'

import './style.scss'

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_192d5w4', 'template_ghs8l5k', form.current, 'B-6Y7LwaxGo6SKUoU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Container className="formContainer">
      <form ref={form} className='contactForm'>
        <Typography variant='h3' className='heading'>Write to us</Typography>
        <TextField className='textField' id="name" name='name' label="Name" variant="outlined" />
        <TextField className='textField' id="email" name='email' label="Email" variant="outlined" />
        <TextField className='textField' id="message" name='message' label="Message" variant="outlined" multiline minRows={6} />
        <Button className='sendButton' variant="contained" onClick={sendEmail}>Send</Button>
      </form>
    </Container>
  )
}