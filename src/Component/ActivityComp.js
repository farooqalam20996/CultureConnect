import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import './index.css';

const activities = [
  { date: '2024-05-01', title: 'Wine Tasting', description: 'Experience local wines.' },
  { date: '2024-05-02', title: 'Cooking Class', description: 'Learn to cook traditional dishes.' },
  { date: '2024-05-03', title: 'City Tour', description: 'Explore the historic parts of the city.' },
  // Add more activities here
];

const Activity = () => {
  return (
    <div id="activity" className="section">
      <Container>
        <Typography variant="h3" gutterBottom>
          Activities
        </Typography>
        <Grid container spacing={4}>
          {activities.map((activity, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper className="activityPaper">
                <Typography variant="h6">{activity.title}</Typography>
                <Typography variant="body2">{activity.date}</Typography>
                <Typography variant="body2">{activity.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Activity;
