import React from 'react';
import { Grid, Container, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import './index.css';

const Contact = () => {
  return (
    <div id="contact" className="section1">
      <Container style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-around" }} >
        <Typography variant="h3" >
          Contact
        </Typography>
        {/* <Grid container spacing={4} marginTop={'2rem'}>
          <Grid item xs={12} md={6} className="contactImage" />
          
          <Grid item xs={12} md={6} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
            <Typography variant="h5"  >
              Email: Shriya.princess@culture.com
            </Typography>
            <Typography variant="h6"  >
              Follow Us
            </Typography>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-around" }} >
                    <Facebook  />
                    <Instagram  />
                    <Twitter  />
                    <LinkedIn  />
            </div>
          </Grid>
        </Grid> */}
        <Typography variant="h5"  >
            Email: Shriya.princess@culture.com
        </Typography>
        <Typography variant="h6"  >
            Follow Us
        </Typography>
        <div style={{ width:"25%", alignSelf:"center", display:"flex", alignItems:"center", justifyContent:"space-around" }} >
            <Facebook  />
            <Instagram  />
            <Twitter  />
            <LinkedIn  />
        </div>
      </Container>
    </div>
  );
};

export default Contact;
