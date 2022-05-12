import React, { useEffect, useState, useRef } from 'react';
import { Container, Typography, Button, Box, Modal } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

import './style.scss';


const couch = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/sofa.svg';
const one = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/one.png';
const two = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/two.png';
const three = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/three.webp';
const four = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/four.png';
const five = 'https://d2dm1r7c3wtyk.cloudfront.net/images/home/five.jpg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1100,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
};


export default function PaintingCatalog() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [artist, setArtist] = useState(null);
  const [artform, setArtform] = useState(null);
  const [dimensions, setDimensions] = useState(null);
  const [about, setAbout] = useState(null);

  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    const paintingSection = document.querySelector('.pictureCatalog');
    if (expanded) {
      paintingSection.scrollIntoView({ behavior: 'smooth' });
      return setExpanded(false);
    }
    return setExpanded(true);
  }
  const paintingContainer = useRef(null);
  const toggleButton = useRef(null);
  const paintingCatalog = useRef(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setName(null);
    setArtist(null);
    setImage(null);
    setArtform(null);
    setDimensions(null);
    setAbout(null);
    setOpen(false);
  };

  useEffect(() => {
    if (expanded) {
      paintingCatalog.current.style.height = '2000px'
      paintingContainer.current.style.setProperty('height', "1800px", "important");
      toggleButton.current.style.transform = 'rotate(180deg)';
    } else {
      paintingCatalog.current.style.height = '100vh';
      paintingContainer.current.style.height = '380px';
      toggleButton.current.style.transform = 'rotate(0deg)';
    }
    const elements = document.querySelectorAll('.paintingImageContainer');
    elements.forEach(element => {
      element.addEventListener('click', () => {
        const name = element.getAttribute('name')
        switch (name) {
          case 'one':
            setName("Durga with ‘Kalachitra’");
            setArtist("By Uttam Chitrakar");
            setImage(one);
            setArtform('Kalighat');
            setDimensions('28 inches x 22 inches');
            setAbout('Known to have originated in the 19th century in the vicinity of Kalighat Kali Temple (Calcutta, West Bengal), Kalighat paintings were done on cloth (patas) depicting religious themes, scenes from epics and from everyday life . The ‘patuas’ (artists) travelled from place to place with these scroll paintings and narrating the stories while singing in the village gatherings and various festivals. Characterised by its bright colours with bold outlines.')
            break;
          case 'two':
            setName("Garden Scene");
            setArtist("By Kalyan Joshi");
            setImage(two);
            setArtform('Phadchitra');
            setDimensions('2*3 feet');
            setAbout('‘About the artform - ‘Phad’ means ‘fold’ in a local dialect from western India. It is a style of religious and folk scroll painting indigenous to Rajasthan, that narrates elaborate religious stories of local deities (Pabuji, Devnarayanji, etc) and Hindu gods and goddesses. These artworks act as the travelling or mobile temples carried by priest-singers (usually of the Rabari tribe) called ‘Bhopas’ and ‘Bhopis’, who with their elaborate song and dance performances narrate the lores.')
            break;
          case 'three':
            setName("Trio of Golden");
            setArtist("By Mahesh Vishnoi");
            setImage(three);
            setArtform('Pichwai');
            setDimensions('3*5 feet');
            setAbout('Pichwai was taken from Sanskrit words, Pich (behind) and wai (hanging) as they are typically hung behind the idol in local shrines. Emerged in the 17th century at Rajasthan’s Nathdwara temple. Pichwai paintings are intricate, mainly dedicated to Lord Shrinath. The art often depicts elements of the monsoon such as peacock, lotus, and Lord Krishna’s beloved cows.')
            break;
          case 'four':
            setName("Rural Village Scene");
            setArtist("By Saikiran Varma");
            setImage(four);
            setArtform('Cheriyal');
            setDimensions('16*20 in');
            setAbout('‘A modified version of ‘nakashi’ art practiced in Telangana, Cheriyal scroll paintings are in a narrative format like a film roll, depicting stories from Indian mythology, puranas, and epics. Traditionally, the Nakashis (artists) depicted the adventures and deeds of local folk heroes which were presented by the story-telling community, ‘Kaki Padagollu’ accompanied by music and dance. The colours used are completely natural.')
            break;
          case 'five':
            setName("Forest Life Gond");
            setArtist("By Venkat Shyam");
            setImage(five);
            setArtform('Phadchitra');
            setDimensions('1.5*3 feet');
            setAbout('‘Phad’ means ‘fold’ in a local dialect from western India. It is a style of religious and folk scroll painting indigenous to Rajasthan, that narrates elaborate religious stories of local deities (Pabuji, Devnarayanji, etc) and Hindu gods and goddesses. These artworks act as the travelling or mobile temples carried by priest-singers (usually of the Rabari tribe) called ‘Bhopas’ and ‘Bhopis’, who with their elaborate song and dance performances narrate the lores.')
            break;
          default:
            console.log('unknown')
            break;
        }
        handleOpen();
      })
      element.addEventListener('mouseover', () => {
        elements.forEach(element => {
          element.style.filter = 'blur(2.5px)';
        });
        element.style.filter = 'blur(0px)'
      });
      element.addEventListener('mouseout', () => {
        elements.forEach(element => {
          element.style.filter = 'blur(0px)'
        })
      })
    })
  });

  return (
    <section ref={paintingCatalog} className="pictureCatalog section">
      <Container className='catalogContainer'>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={style} className='modalBox'>
            <button className='closeButton' onClick={handleClose}>x</button>
            <div className="artImageContainer">
              <img src={image} alt="Art" />
            </div>
            <div className="artContentContainer">
              <Typography variant="h4" className='name' component="h2" style={{color:'#193166'}}>
                {name}
              </Typography>
              <Typography variant='h5' className='artist' sx={{fontWeight: 700}}>
                {artist}
              </Typography>
              <Typography variant='h6' mt={10}>
                <span style={{color: '#193166'}}>Artform</span> {artform}
              </Typography>
              <Typography variant='h6' mt={1}>
                <span style={{color: '#193166'}}>Dimensions</span> {dimensions}
              </Typography>
              <Typography variant='h6' mt={1}>
                <span style={{color: '#193166'}}>About the artform</span> {about}
              </Typography>
              <Button variant='outlined' sx={{mt: 5}} className='viewMoreButton'>
                <a href="https://linktr.ee/bridgebharat" target="_blank" rel="noopener noreferrer">view more</a>
              </Button>
            </div>
          </Box>
        </Modal>
        <Typography variant='h5' className='catalogHeading'>
          Indian Traditional Art from the Masters<br />made with Natural Pigments
        </Typography>
        <Box className='paintingsContainer' ref={paintingContainer}>
          <div className="imageContainer firstContainer">
            <div className='paintingImageContainer' name='one'>
              <img className='paintingImage' src={one} alt="Painting" width={105}/>
              <div className="paintingMiniInfo">
                <div className="name">
                  Kalighat Painting
                </div>
                <div className="description">
                  Uttam Chitrakar
                </div>
              </div>
            </div>
            <div className='paintingImageContainer' name='two'>
              <img className='paintingImage' src={two} alt="Painting" width={200}/>
              <div className="paintingMiniInfo">
                <div className="name">
                  Garden Scene
                </div>
                <div className="description">
                  Kalyan Joshi
                </div>
              </div>
            </div>
          </div>
          <div className="imageContainer secondContainer">
            <div className='paintingImageContainer' name='three'>
              <img className='paintingImage' src={three} alt="Painting" width={150}/>
              <div className="paintingMiniInfo">
                <div className="name">
                  Trio of Golden
                </div>
                <div className="description">
                  Mahesh Vishnoi
                </div>
              </div>
            </div>
          </div>
          <div className="imageContainer thirdContainer">
            <div className='paintingImageContainer' name='four'>
              <img className='paintingImage' src={four} alt="Painting" width={132}/>
              <div className="paintingMiniInfo">
                <div className="name">
                  Cheriyal Art
                </div>
                <div className="description">
                  Saikiran Varma
                </div>
              </div>
            </div>
            <div className='paintingImageContainer' name='five'>
              <img className='paintingImage' src={five} alt="Painting" width={132}/>
              <div className="paintingMiniInfo">
                <div className="name">
                  Forest life Gond
                </div>
                <div className="description">
                  Venkat Shyam
                </div>
              </div>
            </div>
          </div>
        </Box>
        <Box className='imageButtonBox'>
          <img src={couch} alt="Couch" />
          <Button variant='outlined' className='viewMoreButton'>
            <a href="https://linktr.ee/bridgebharat" target="_blank" rel="noopener noreferrer">view more</a>
          </Button>
        </Box>
        <Button variant='outlined' className='viewMoreSmallButton'>
          <a href="https://linktr.ee/bridgebharat" target="_blank" rel="noopener noreferrer">view more</a>
        </Button>
        <div className='toggleButton' ref={toggleButton} onClick={handleClick}>
          <ExpandMore/>
        </div>
      </Container>
    </section>
  )
}
