import React from 'react';
import { Container, Typography, Grid, Card, CardActionArea, CardMedia, CardContent, Button } from '@mui/material';

// Local

import './index.css';
import Blog1 from "../../Image/blog1.webp";
import Blog2 from "../../Image/blog2.jpg";
import Blog3 from "../../Image/blog3.webp";

const blogs = [
  {
    title: 'FOLLOW IN THE FOOTSTEPS OF CHARLIE CHAPLIN',
    imageUrl: Blog1,
    link: 'https://www.chaplinsworld.com/en'
  },
  {
    title: 'LINDT HOME OF CHOCOLATE',
    imageUrl: Blog3,
    link: 'https://www.lindt-home-of-chocolate.com/en/'
  },
  {
    title: 'LE GRUYERE SWITZERLAND',
    imageUrl: Blog2,
    link: 'https://www.lamaisondugruyere.ch/homepage-en/'
  }
];

const Blog = () => {
  return (
    <div id="blogs" className="section">
      <Container>
        <Typography variant="h3" gutterBottom>
          Blogs
        </Typography>
        <Typography variant='h5' style={{ fontFamily:"bold", marginTop:"3rem", marginBottom:"3rem" }}  >
          Discover the most captivating cultural experiences in Swiss accessible to the public.
        </Typography> 
        <Grid container spacing={4}>
          {blogs.map((blog, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardActionArea component="a" href={blog.link} target="_blank">
                  <CardMedia
                    component="img"
                    height="200"
                    image={blog.imageUrl}
                    alt={blog.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {blog.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div className="buttonsContainer">
          <Button variant="contained" color="primary">
            Click Here 
          </Button>
          <Button variant="outlined" color="primary">
            Find Out More
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
