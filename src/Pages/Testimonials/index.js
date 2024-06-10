import React from 'react';
import { Grid, Typography, Container, Paper } from '@mui/material';
import './index.css';

const testimonials = [
  {
    name: 'Maria S.',
    location: 'Barcelona, Spain',
    text: 'Using Cultural Connect was a game-changer for my travel experience. The workshops and activities let me dive deep into local traditions that I would have otherwise missed. I felt like a true part of the community, and the memories I made are priceless. Highly recommend for anyone looking to truly understand and appreciate the places they visit!'
  },
  {
    name: 'James R.',
    location: 'Sydney, Australia',
    text: 'My trip to Japan was enriched beyond measure thanks to Cultural Connect. I participated in a traditional tea ceremony and a calligraphy workshop, both of which were led by local masters. These experiences gave me a profound appreciation for Swiss culture that no guidebook could ever provide. Cultural Connect truly made my journey unforgettable.'
  },
  {
    name: 'Fatima A.',
    location: 'Marrakesh, Morocco',
    text: 'Cultural Connect brought me closer to the heart of the places I visited. From cooking classes in Switzerland, each activity was an authentic and immersive experience. I didn\'t just see the sights – I lived the culture. This platform is a must for anyone looking to make genuine connections while traveling.'
  }
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="section">
      <Container>
        <Typography variant="h3" gutterBottom>
          Testimonials
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper className="testimonialPaper" elevation={3}>
                <Typography variant="h6" gutterBottom>
                  {testimonial.name}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {testimonial.location}
                </Typography>
                <Typography variant="body1">
                  {testimonial.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Testimonials;
