import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './index.css';

const faqs = [
  {
    question: 'What is Cultural Connect?',
    answer: 'Cultural Connect is an online platform that bridges explorers with local communities through engaging workshops and activities. We aim to provide travelers with authentic experiences that dive deep into the heart of local traditions and lifestyles.'
  },
  {
    question: 'How does Cultural Connect work?',
    answer: 'Simply browse our website to find a canton in Switzerland and select from various workshops and activities offered by local hosts. Book your preferred experiences and get ready to immerse yourself in the local culture during your travels.'
  },
  {
    question: 'What types of activities are offered?',
    answer: 'We offer a wide range of activities, including traditional cooking classes, craft workshops, cultural tours, dance lessons, and more. Each activity is designed to provide an authentic and immersive experience.'
  },
  {
    question: 'How do I book an activity?',
    answer: 'After selecting your desired destination and activity, click on the booking button and follow the instructions to complete your reservation. You will receive a confirmation email with all the details of your booking.'
  },
  {
    question: 'Are the hosts verified?',
    answer: 'Yes, all our hosts are thoroughly vetted to ensure they offer high-quality and authentic experiences. We work closely with local communities to bring you the best cultural activities available.'
  },
  {
    question: 'Is there a fee to use Cultural Connect?',
    answer: 'There is no fee to browse and explore our platform. The cost of each activity is listed on the activity page and is paid directly through our booking system.'
  },
  {
    question: 'How do I leave a review for an activity?',
    answer: 'After participating in an activity, you will receive an email inviting you to leave a review. Your feedback is invaluable and helps us maintain high standards and improve our services.'
  }
];

const FAQs = () => {
  return (
    <div id="faqs" className="section">
      <Container>
        <Typography variant="h3" gutterBottom>
          FAQs
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
      <Typography variant='h5' style={{ fontFamily:"bold", marginTop:"3rem", marginBottom:"3rem" }}  >
          Reserve your spot and learn more.
        </Typography> 
        <Button variant="contained" color="primary">
          Click To Find out more
        </Button> 
    </div>
  );
};

export default FAQs;
