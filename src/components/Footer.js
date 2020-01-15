import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return(
      <div className="footer">
        <div className="sub-footer">
          <div className="footer-external-links">
            <div className="linksA">
              <i className="fab fa-facebook-f fa-lg footer-facebook"></i>
              <i className="fab fa-twitter fa-lg footer-twitter"></i>
              <i className="fab fa-instagram fa-lg footer-instagram"></i>
              <i className="fab fa-spotify fa-lg"></i>

            </div>
            <div className="linksB">
              <img src="../images/stereogumlogo-dark.jpg" className="logo" alt=""/>
              <a href="#" id="siteTitle">Stereogum</a>
            </div>
          </div>

          <div className="footer-site-links">
            <a href="#">Features</a>
            <a href="#">Songs</a>
            <a href="#">Videos</a>
            <a href="#">Lists</a>
            <a href="#">Contact Us</a>
          </div>

          <div className="footer-p">
            <p>
            Stereogum is an affiliate site of Billboard, a subsidiary of Prometheus Global Media, LLC.
            </p>
          </div>
          <div className="footer-links">
            <a href="#">About Stereogum</a>
            <a href="#">Privacy Policy</a>
            <a href="#">AdChoices</a>
            <a href="#">Copyright</a>
          </div>
          <div className="affils">
            <p>
              Billboard | The Hollywood Reporter | SPIN | VIBE | Stereogum
            </p>
          </div>
        </div>
        
      </div>
    )
  }
};

export default Footer;