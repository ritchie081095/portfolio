import React, { Component } from 'react';


class Graphics extends Component {
  render() {
    return (
 <div id="journal" className="text-left paddsection">

    <div className="container">
      <div className="section-title text-center">
        <h2>Graphics</h2>
      </div>
    </div>

     <div className="container">
      <div className="row">
        <div className="col-md-12">

          

          <div className="portfolio-container">

            <div className="col-lg-4 col-md-6 portfolio-thumbnail all branding uikits webdesign">
              <a className="popup-img" href="images/portfolio/1.jpg">
                <img src="images/portfolio/1.jpg" alt="img" />
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits photography">
              <a className="popup-img" href="images/portfolio/2.jpg">
                <img src="images/portfolio/2.jpg"  alt="img" />
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-thumbnail all branding webdesig photographyn">
              <a className="popup-img" href="images/portfolio/3.jpg">
                <img src="images/portfolio/3.jpg" alt="img" />
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups webdesign photography">
              <a className="popup-img" href="images/portfolio/4.jpg">
                <img src="images/portfolio/4.jpg" alt="img" />
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-thumbnail all branding uikits photography">
              <a className="popup-img" href="images/portfolio/5.jpg">
                <img src="images/portfolio/5.jpg" alt="img" />
              </a>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-thumbnail all mockups uikits webdesign">
              <a className="popup-img" href="images/portfolio/6.jpg">
                <img src="images/portfolio/6.jpg" alt="img" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
    

  </div>
    );
  }
}

export default Graphics;
