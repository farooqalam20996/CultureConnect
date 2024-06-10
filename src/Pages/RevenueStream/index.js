import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './index.css';
import RevenueImage from "../../Image/revenue2.jpg";
import money from "../../Image/money.jpg";

const RevenueStream = () => {
    return (
        <div id="revenue_stream" className="section2">
            <Container>
                <Typography variant="h3" gutterBottom>
                    Revenue Stream
                </Typography>
                <img src={RevenueImage} className='imageStyle' />
                <img src={money} className='imageStyle' />
            </Container>
            <Typography variant='h5' style={{ fontFamily: "bold", marginTop: "3rem", marginBottom: "3rem" }}  >
                Customers will pay a nominal subscription fee to access the platform's exclusive offerings.
            </Typography>
            <Button variant="contained" color="primary">
                Make a Payment & Find out more
            </Button>
        </div>
    );
};

export default RevenueStream;
