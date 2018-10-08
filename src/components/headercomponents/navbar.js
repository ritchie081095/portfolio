import React, { Component } from 'react';
import 
{
  Link
} from 'react-router-dom' 


class Header extends Component {
  render() {
    return (
      <header> 

         <nav id="main-nav">
          <div className="row">
            <div className="container">

              <div className="logo">
                <a href="index.html"><img src="./images/logo.png" alt="logo" /></a>
              </div>

              <div className="responsive"><i data-icon="m" className="ion-navicon-round"></i></div>

              <ul className="nav-menu list-unstyled">
                <li><a href="#header" className="smoothScroll">Home</a></li>
                <li><a href="#about" className="smoothScroll">About</a></li>
                <li><a href="#portfolio" className="smoothScroll">Portfolio</a></li>
                <li><a href="#journal" className="smoothScroll">Graphics</a></li>
                <li><a href="#contact" className="smoothScroll">Contact</a></li>
              </ul>

            </div>
          </div>
        </nav>
		  
      </header>
    );
  }
}

export default Header;
