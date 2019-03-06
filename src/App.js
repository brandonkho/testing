import React, { Component } from 'react';
import './App.css';
import { Grid, Row } from 'react-bootstrap';
import Input from './components/Input/';
import Preview from './components/Preview/';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <header>          
            <h2>The Promo Express</h2>
          </header>
        </Row>
        <Row>
          <Input />
          <Preview />
        </Row>
      </Grid>
    );
  }
}

export default App;


// Promo name

// Global
  // Background Image
  // Font style 
  // Logo Image
  // Container Theme
    // White
    // Grey
    // Transparent

// Video
  // video src 

// CTA 
  // Promo Copy text 
