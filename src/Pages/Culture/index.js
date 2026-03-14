import React, { useEffect, useState } from 'react';
import { Container, Typography, Tabs, Tab, Grid } from '@mui/material';
import './index.css';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShieldIcon from '@mui/icons-material/Shield';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

// Image Imports
import UserFriendly from '../../Image/userFriendly.jpg';
import Customizable from '../../Image/customoze.jpg';
import Authenticated from '../../Image/autheenticated.webp';
import LocalConnections from '../../Image/localConnections.jpg';

const CultureConnect = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(prevValue => (prevValue + 1) % 4);
    }, 4000);
    
    return () => clearInterval(interval); 
  }, []);

  return (
    <div id="cultureConnect" className="section">
      <Container>
        <Typography variant="h3" gutterBottom>
          Culture Connect
        </Typography>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
          <Tab style={{ textTransform:'none' }} label="Local Connections" icon={<PeopleAltIcon style={{ width:"2rem", height:"2rem" }} />} iconPosition='start' />
          <Tab style={{ textTransform:'none' }} label="Authentic Engagements" icon={<ShieldIcon style={{ width:"2rem", height:"2rem" }} />} iconPosition='start' />
          <Tab style={{ textTransform:'none' }} label="Customizable Experiences" icon={<SettingsSuggestIcon style={{ width:"2rem", height:"2rem" }} />} iconPosition='start' />
          <Tab style={{ textTransform:'none' }} label="User-Friendly Interface" icon={<PeopleAltIcon style={{ width:"2rem", height:"2rem" }} />} iconPosition='start' />
        </Tabs>
        {value === 3 && (
          <Grid container spacing={4} className="cultureGrid" marginTop={'0.25rem'}>
            <Grid item xs={12} md={6}>
              <img src={UserFriendly} alt="User-Friendly Interface" className="fullHeightImage" />
            </Grid>
            <Grid item xs={12} md={6} className="cultureText">
                <Typography variant="body1" style={{ textAlign:"left" }} >
                  Our platform is designed with you in mind, making it easy to find and book activities that match your interests.
                </Typography>
            </Grid>
          </Grid>
        )}
        {value === 2 && (
          <Grid container spacing={4} className="cultureGrid" marginTop={'0.25rem'} >
            <Grid item xs={12} md={6}>
              <img src={Customizable} alt="Customizable Experiences" className="fullHeightImage" />
            </Grid>
            <Grid item xs={12} md={6} className="cultureText">
                <Typography variant="body1" style={{ textAlign:"left" }} >
                  Tailor your journey with personalized itineraries that cater to your unique preferences.
                </Typography>
            </Grid>
          </Grid>
        )}
        {value === 1 && (
          <Grid container spacing={4} className="cultureGrid" marginTop={'0.25rem'} >
            <Grid item xs={12} md={6}>
              <img src={Authenticated} alt="Authentic Engagements" className="fullHeightImage" />
            </Grid>
            <Grid item xs={12} md={6} className="cultureText">
                <Typography variant="body1" style={{ textAlign:"left" }} >
                  Participate in workshops and activities led by locals, ensuring an authentic experience that goes beyond the typical tourist path.
                </Typography>
            </Grid>
          </Grid>
        )}
        {value === 0 && (
          <Grid container spacing={4} className="cultureGrid" marginTop={'0.25rem'} >
            <Grid item xs={12} md={6}>
              <img src={LocalConnections} alt="Local Connections" className="fullHeightImage" />
            </Grid>
            <Grid item xs={12} md={6} className="cultureText">
                <Typography variant="body1" style={{ textAlign:"left" }} >
                  Build meaningful relationships with local communities, gaining a deeper understanding of their culture and way of life.
                </Typography>
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default CultureConnect;
