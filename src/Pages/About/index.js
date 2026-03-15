import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import './index.css';

import Shriya from "../../Image/Farooq.png"

const About = () => {
  return (
    <div id="about" className="section">
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} >
            <div className="ownerInfo">
              <img
                src={Shriya}
                alt="Owner"
                className="ownerImage"
              />
              <Typography variant="h5" component="div">
                The Co Founder of Culture Connect – Shriya Goel
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="div">
                About
            </Typography>
            <Typography variant="body1">
              Our online platform bridges explorers with the local communities in Switzerland through engaging workshops and activities, ensuring you dive deep into the heart of local traditions and lifestyles. Discover the real essence of every place you visit with Cultural Connect – where genuine connections create unforgettable journeys.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
