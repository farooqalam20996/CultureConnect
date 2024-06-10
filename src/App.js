import React from 'react';
import { AppBar, Toolbar, Typography, Container, Button, makeStyles, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import './App.css';
import About from './Pages/About';
import Culture from './Pages/Culture';
import Home from './Pages/Home';
import Activites from './Pages/Activities';
import Testimonials from './Pages/Testimonials';
import Blogs from './Pages/Blogs';
import FAQs from './Pages/Faqs';
import Contact from './Pages/Contact';
import logo from './Image/logo.jpeg';
import RevenueStream from './Pages/RevenueStream';

function App(props) {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={"root"} >
      <AppBar position="fixed">
        <Toolbar style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }} >
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }} >
            <img src={logo} style={{ width:"2.5rem", height:'2.5rem', borderRadius:"100%"  }} />
            <Typography variant="h6" className={"title"} style={{ marginLeft:"4px" }} >
              Culture Connect
            </Typography>
          </div>
          <div>
            <Button color="inherit" style={{ textTransform:"none" }}  onClick={() => scrollToSection('home')}>Home</Button>
            <Button color="inherit" style={{ textTransform:"none" }}  onClick={() => scrollToSection('culture')}>Culture </Button>
            <Button color="inherit" style={{ textTransform:"none" }}  onClick={() => scrollToSection('activities')}>Activities  </Button>
            <Button color="inherit" style={{ textTransform:"none" }}  onClick={() => scrollToSection('testemonials')}>Testemonials</Button>
            <Button color="inherit" style={{ textTransform:"none" }}  onClick={() => scrollToSection('revenue_stream')}>Revenue</Button>
            <Button color="inherit" style={{ textTransform:"none" }}  onClick={() => scrollToSection('about')}>About</Button>
            <Button color="inherit" style={{ textTransform:"none" }}  onClick={() => scrollToSection('blogs')}>Blogs</Button>
            <Button color="inherit" style={{ textTransform:"none" }}  onClick={() => scrollToSection('faqs')}>FAQs</Button>
            <Button color="inherit" style={{ textTransform:"none" }}  onClick={() => scrollToSection('contact')}>Contact</Button>
          </div>
        </Toolbar>
      </AppBar>
        <div id="home" /*className={"section"} */  >
          <Home xOnSubscribe={() => scrollToSection('contact')} />
        </div>
      <Container >
        <div id="culture" /* className={"section"} */>
          <Culture />
        </div>
        <div id="activities" className={"section"}>
          <Activites />
        </div>
        <div id="testemonials" /* className={"section"} */>
          <Testimonials />
        </div>
        <div id="revenue_stream" /* className={"section"} */>
          <RevenueStream />
        </div>
        <div id="about" /* className={"section"} */ >
          <About />
        </div>
        <div id="blogs" /* className={"section"} */>
          <Blogs />
        </div>
        <div id="faqs"  /* className={"section"} */>
          <FAQs />
        </div>
      </Container>
        <div id="contact" /* className={"section"} */>
          <Contact />
        </div>
    </div>
  );
}

export default App;
