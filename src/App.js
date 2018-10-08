import React, { Component } from 'react';
import 
{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom' 

import Navbar from './components/headercomponents/navbar';
import Footer from './components/footercomponents/footer';
import Header from './components/pages/header';
import About from './components/pages/about';
import Services from './components/pages/services';
import Portfolio from './components/pages/portfolio';
import Graphics from './components/pages/graphics';
import Contact from './components/pages/contact';


import './Assets/css/default.min.css';


class App extends Component {
  render() {
    return (

      <Router>
      <div className="App">
        <Navbar />
          <Header />
          <About />
          <Services />
          <Portfolio />
          <Graphics />
          <Contact />
          <Footer />

         
      </div>

      </Router>
    );
  }
}

export default App;
