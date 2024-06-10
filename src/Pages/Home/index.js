import React from 'react';
import { Typography, Button } from '@mui/material';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import './index.css';

const Home = ({xOnSubscribe }) => {
  return (
    <div id="home" className="homeSection">
      <Slide left>
        <Typography variant="h2" component="div">
          Culture Connect
        </Typography>
      </Slide>
      <Fade bottom delay={500} >
        <div style={{ width:"30%", alignSelf:"center" }} >
            <Typography variant="subtitle1"  >
                Tired of missing out on authentic local experiences? Or struggling to connect with locals for an authentic cultural experience? Culture Connect is your solution!
            </Typography>
            <Button variant="contained" className="button" style={{ marginTop:'2rem' }} onClick={xOnSubscribe} >
                Get Started and Subscribe
            </Button>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
