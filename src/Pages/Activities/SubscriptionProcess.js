import React from 'react';
import { Container, Grid, Typography, Button, Paper } from '@mui/material';
// import PaySubscription from './images/pay_subscription.png';
// import BookEvent from './images/book_event.png';
// import PayMoney from './images/pay_money.png';
import './index.css';
import PayMoney from "../../Image/pay_money1.png"
import PaySubscription from "../../Image/pay_subscription1.png"
import BookEvent from "../../Image/book_event1.png"

const SubscriptionProcess = () => {
  return (
    <div id="subscriptionProcess" className="sectionSub">
      <Container>
        {/* <Typography variant="h5" gutterBottom align="center">
          We Think Faster Is Better
        </Typography>
        <Typography variant="subtitle2" gutterBottom align="center">
          Your time is precious. We make sure you don't have to spend it on lengthy processes.
          Our super-fast subscriptions and instant confirmations mean you can get on with your life.
        </Typography> */}
        <Grid container bgcolor={'white'} marginTop={'0rem'} paddingTop={'2rem'} paddingBottom={'2rem'} spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Paper elevation={0} className="processPaper">
              <img src={PaySubscription} alt="Pay Subscription" className="processImage" />
              <Typography variant="h6" gutterBottom>
                Pay Subscription
              </Typography>
              <Typography variant="subtitle2">
                Choose your plan and pay your subscription easily online.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} className="processPaper">
              <img src={BookEvent} alt="Book Event" className="processImage" />
              <Typography variant="h6" gutterBottom>
                Book Event
              </Typography>
              <Typography variant="subtitle2">
                Select and book the events you are interested in attending.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={0} className="processPaper">
              <img src={PayMoney} alt="Pay Money" className="processImage" />
              <Typography variant="h6" gutterBottom>
                Pay Money & Get Email Confirmation
              </Typography>
              <Typography variant="subtitle2">
                Complete the payment process and receive an email confirmation instantly.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <div className="buttonsContainer">
          <Button variant="contained" color="primary">
            Make a Subscription
          </Button>
          <Button variant="outlined" color="primary">
            Find Out More
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default SubscriptionProcess;
