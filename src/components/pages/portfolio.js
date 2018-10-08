import React, { Component } from 'react';


class Portfolio extends Component {
  render() {
    return (
    <div id="portfolio" className="text-center paddsection">
      <div className="container">
        <div className="section-title text-center">
          <h2>My Portfolio</h2>
        </div>
      </div>

      <div className="container">
               
        <table className="table table-striped text-left" id="table-portfolio">
          <thead>
            <tr>
              <th>Title</th>
              <th>Link</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Omni Strategic Services</td>
              <td><a href="http://omnistrategicservices.com/" target="_blank" >http://omnistrategicservices.com/ </a></td>
              <td>Lead Web Developer</td>
            </tr>
            <tr>
              <td>Pl Custom</td>
              <td><a href="https://mercadeodev.com/" target="_blank" >https://mercadeodev.com/</a></td>
              <td>Full Stack Developer</td>
            </tr>

            <tr>
              <td>Rescue 1</td>
              <td><a href="https://rescue1mfg.mercadeodev.com/" target="_blank" >https://rescue1mfg.mercadeodev.com/</a></td>
              <td>Full Stack Developer</td>
            </tr>

            <tr>
              <td>Premier Pest Management</td>
              <td><a href="https://www.premierpestmanagements.com/" target="_blank" >https://www.premierpestmanagements.com/</a></td>
              <td>Front End Developer</td>
            </tr>

            <tr>
              <td>New Jersey Emergency Vehicles</td>
              <td><a href="https://njev1.mercadeodev.com/" target="_blank" >https://njev1.mercadeodev.com/</a></td>
              <td>Full Stack Developer </td>
            </tr>

            <tr>
              <td>1776 Steak House</td>
              <td><a href="https://www.1776steakhouse.com/" target="_blank" >https://www.1776steakhouse.com/</a></td>
              <td>Front End Developer</td>
            </tr>

            <tr>
              <td>Atlantic Sands Hotel</td>
              <td><a href="https://atlanticsandshotel.mercadeodev1.com/" target="_blank" >https://atlanticsandshotel.mercadeodev1.com/</a></td>
              <td>Front End Developer</td>
            </tr>

            <tr>
              <td>Faith Financial Inc</td>
              <td><a href="http://Faithfinancialinc.mercadeodev1.com/" target="_blank" >http://Faithfinancialinc.mercadeodev1.com/</a></td>
              <td>Front End Developer</td>
            </tr>

            <tr>
              <td>Work in Process System</td>
              <td><a href="http://wip-dev.robink.com/" target="_blank" >http://wip-dev.robink.com/</a></td>
              <td>Full Stack Developer</td>
            </tr>

            <tr>
              <td>Bayside Jet Drive</td>
              <td><a href="https://baysidejetdrive.net/" target="_blank" >https://baysidejetdrive.net/</a></td>
              <td>Full Stack Developer</td>
            </tr>

            <tr>
              <td>Mclain Properties</td>
              <td><a href="https://www.mclainproperties.com/" target="_blank" >https://www.mclainproperties.com/</a></td>
              <td>Front End Developer</td>
            </tr>


           
            
          </tbody>
        </table>
      </div>


    </div>
    );
  }
}

export default Portfolio;
