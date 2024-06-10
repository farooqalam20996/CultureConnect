import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Button, TextField, Snackbar } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './index.css';
import SubscriptionProcess from './SubscriptionProcess';

// Sample activities data
const activities = [
  // Add more activities here
  { date: '2024-06-01', title: 'Cooking with local people' },
  { date: '2024-06-02', title: 'Visit to the local Chocolate Factory - Lindt Chocolate' },
  { date: '2024-06-03', title: 'Visit to the local cheese Factory  - Gruyere Cheese Factory' },
  { date: '2024-06-04', title: 'Visit to the Charlie Chaplin Musemusmn' },
  { date: '2024-06-05', title: 'Day in life with the local people' },
  { date: '2024-06-06', title: 'Brunch With the local people' },
  { date: '2024-06-07', title: 'Visit to top of Europe' },

  { date: '2024-06-08', title: 'Cooking with local people' },
  { date: '2024-06-09', title: 'Visit to the local Chocolate Factory - Lindt Chocolate' },
  { date: '2024-06-10', title: 'Visit to the local cheese Factory  - Gruyere Cheese Factory' },
  { date: '2024-06-11', title: 'Visit to the Charlie Chaplin Musemusmn' },
  { date: '2024-06-12', title: 'Day in life with the local people' },
  { date: '2024-06-13', title: 'Brunch With the local people' },
  { date: '2024-06-14', title: 'Visit to top of Europe' },

  { date: '2024-06-15', title: 'Cooking with local people' },
  { date: '2024-06-16', title: 'Visit to the local Chocolate Factory - Lindt Chocolate' },
  { date: '2024-06-17', title: 'Visit to the local cheese Factory  - Gruyere Cheese Factory' },
  { date: '2024-06-18', title: 'Visit to the Charlie Chaplin Musemusmn' },
  { date: '2024-06-19', title: 'Day in life with the local people' },
  { date: '2024-06-20', title: 'Brunch With the local people' },
  { date: '2024-06-21', title: 'Visit to top of Europe' },

  { date: '2024-06-22', title: 'Cooking with local people' },
  { date: '2024-06-23', title: 'Visit to the local Chocolate Factory - Lindt Chocolate' },
  { date: '2024-06-24', title: 'Visit to the local cheese Factory  - Gruyere Cheese Factory' },
  { date: '2024-06-25', title: 'Visit to the Charlie Chaplin Musemusmn' },
  { date: '2024-06-26', title: 'Day in life with the local people' },
  { date: '2024-06-27', title: 'Brunch With the local people' },
  { date: '2024-06-28', title: 'Visit to top of Europe' },

  { date: '2024-06-29', title: 'Cooking with local people' },
  { date: '2024-06-30', title: 'Visit to the local Chocolate Factory - Lindt Chocolate' },
  { date: '2024-07-01', title: 'Visit to the local cheese Factory  - Gruyere Cheese Factory' },
  { date: '2024-07-02', title: 'Visit to the Charlie Chaplin Musemusmn' },
  { date: '2024-07-03', title: 'Day in life with the local people' },
  { date: '2024-07-04', title: 'Brunch With the local people' },
  { date: '2024-07-05', title: 'Visit to top of Europe' },
 
];

// Helper function to get the days in a month
const getDaysInMonth = (year, month) => {
  return new Array(31).fill(null).map((_, index) => new Date(year, month, index + 1)).filter(date => date.getMonth() === month);
};

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Activity = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [comment, setComment] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    setComment('')
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayIndex = daysInMonth[0].getDay();

  // Create a 2D array representing the weeks of the month
  const weeks = [];
  let currentWeek = new Array(firstDayIndex).fill(null);

  daysInMonth.forEach((date) => {
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(date);
  });

  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    weeks.push(currentWeek);
  }

  return (
    <div id="activity" className="section">
      <Container style={{ display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column" }} >
        <Typography variant="h3" gutterBottom>
          Activities
        </Typography>
        <div>
            <SubscriptionProcess />
        </div>
        <div className="calendarNavigation">
          <Button onClick={handlePrevMonth} startIcon={<ArrowBackIosIcon />}>Previous</Button>
          <Typography variant="h6">{currentDate.toLocaleString('default', { month: 'long' })} {year}</Typography>
          <Button onClick={handleNextMonth} endIcon={<ArrowForwardIosIcon />}>Next</Button>
        </div>
        <Grid container spacing={2}>
          <Grid container item xs={12} spacing={2}>
            {daysOfWeek.map((day) => (
              <Grid item xs={1.71} key={day}>
                <Typography variant="h6">{day}</Typography>
              </Grid>
            ))}
          </Grid>
          {weeks.map((week, weekIndex) => (
            <Grid container item xs={12} spacing={2} key={weekIndex}>
              {week.map((date, dayIndex) => {
                const activity = date
                  ? activities.find(activity => new Date(activity.date).toDateString() === date.toDateString())
                  : null;

                return (
                  <Grid item xs={1.71} key={dayIndex}>
                    <Paper className="activityPaper">
                      <Typography variant="h6">{date ? date.getDate() : ''}</Typography>
                      {activity ? (
                        <>
                          <Typography variant="body2">{activity.title}</Typography>
                          <Typography variant="caption">{activity.description}</Typography>
                        </>
                      ) : (
                        <Typography variant="caption"></Typography>
                      )}
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          ))}
        </Grid>
        <div style={{ width:"40%",  marginTop:"4rem" }} >
          <TextField
              variant='outlined' 
              value={comment}
              onChange={(e) => { setComment(e.target.value)}}
              label="Add Your Comment"
              fullWidth
              size='small'
          />
          <Button 
            variant='contained'
            size='large'
            style={{ marginTop:"1rem" }}
            onClick={() => handleClick()}
          >
            Submit
          </Button>
        </div>
        <Typography variant='h4' style={{ fontFamily:"bold", marginTop:"3rem" }}  >
          Secure your place and delve deeper.
        </Typography>
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Your comment has been added."
      />
    </div>
  );
};

export default Activity;
