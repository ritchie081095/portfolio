import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
      <div id="about" className="paddsection">
        <div className="container">
          <div className="row justify-content-between">

            <div className="col-lg-4 ">
              <div className="div-img-bg">
                <div className="about-img">
                  <img src="./images/me.jpg" className="img-responsive" alt="me" />
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="about-descr">

                <p className="p-heading">Im a Software Developer , Graphic Designer and I love to code. I've worked in Web Developing industry for more than 3 years already. Here are my skills set:  </p>
                <p className="separator list-group-item-tex" >
                 
                  <li> Web developing using WordPress, Laravel, Code igniter, Vue js, Javascript, jQuery, React, Angular, python</li>
                  <li>Wordpress builder : THEME X, Visual Composer, and Elementor</li>
                  <li>Custom Php template Wordpress</li>
                  <li>Custom Plugin Wordpress</li>
                  <li>PSD to HTML</li>
                  <li>Database Management (MySQL)</li>
                  <li>Photoshop (Graphic Designing)</li>
                  
               

                </p>

              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
