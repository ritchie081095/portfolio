import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
    <div id="header" className="home">
      	<div className="container">
       		<div className="header-content">
       			<h1>Im <span className="typed"></span></h1>
        		<p>graphic designer, software developer, freelancer</p>
       		

       		 <ul className="list-unstyled list-social">
	          <li><a href="#"><i className="ion-social-facebook"></i></a></li>
	          <li><a href="#"><i className="ion-social-google"></i></a></li>
	          <li><a href="mailto:nalamrtchie@gmail.com"><i className="ion-social-skype"></i></a></li>
	          <li><a href="https://www.linkedin.com/in/ritchie-nalam-5b4423171/" target="_blank"><i className="ion-social-linkedin"></i></a></li>
	          
        	 </ul>

      		</div>
     	</div>
     </div>
    );
  }
}

export default Header;
