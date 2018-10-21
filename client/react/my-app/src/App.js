import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import MainContentComponent from './components/MainContentComponent';
import FooterComponent from './components/FooterComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderComponent />

          <MainContentComponent />

          <FooterComponent />
        </div>
      </Router>
    );
  }
}

export default App;
