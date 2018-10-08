import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
       <div id="footer" className="text-center">
	    <div className="container">
	      <div className="socials-media text-center">

	        <ul className="list-unstyled">
	          <li><a href="#"><i className="ion-social-facebook"></i></a></li>
	          <li><a href="#"><i className="ion-social-twitter"></i></a></li>
	          <li><a href="#"><i className="ion-social-instagram"></i></a></li>
	          <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
	          <li><a href="#"><i className="ion-social-tumblr"></i></a></li>
	          <li><a href="#"><i className="ion-social-dribbble"></i></a></li>
	        </ul>

	      </div>

	      <p>React -- Sass -- Gulp -- Node js</p>

		    </div>
		  </div>
    );
  }
}

export default Footer;
