import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
      <div id="contact" className="paddsection">
    <div className="container">
      <div className="contact-block1">
        <div className="row">

          <div className="col-lg-4">
            <div className="contact-contact">

              <h2 className="mb-30">GET IN TOUCH</h2>

              <ul className="contact-details">
                <li><span>Doña Mercedes Vil Panacan</span></li>
                <li><span>Philippines , Davao City</span></li>
                <li><span>+63 9481663230</span></li>
                <li><span>nalamritchie@gmail.com</span></li>
              </ul>

            </div>
          </div>

          <div className="col-lg-8">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.7708077393672!2d125.65355301446021!3d7.1524776175166105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96962e38be725%3A0x13ffd6fc7d639bce!2sSAN+MIGUEL+PARISH!5e0!3m2!1sen!2sph!4v1538937531806" width="100%" height="400" frameBorder="0"  allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default About;
