import React, { Component } from 'react';

class Navbar extends Component {
  
  render() {
    return (
      <div className="navbar">
        <div>
          <img src="../images/stereogumlogo.jpg" className="logo" alt=""/>
          <a href="#" id="siteTitle">Stereogum</a>
        </div>
        <div className="pageLinks">
          <a href="#">Columns <i className="fas fa-caret-down"></i></a>
          <a href="#">New Music</a>
          <a href="#">Lists</a>
          <a href="#">Videos</a>
        </div>  

        <div className="siteLogos">
          <a href="https://www.facebook.com/Stereogum" target="_blank">
            <i className="fab fa-facebook-f fa-lg"></i>
          </a>
          <a href="https://twitter.com/stereogum" target="_blank">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="https://www.instagram.com/stereogum/" target="_blank">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://open.spotify.com/user/stereogum" target="_blank">
            <i className="fab fa-spotify fa-lg"></i>
          </a>
        </div>

        <div className="search">
          <i className="fas fa-search fa-lg"></i>
        </div>
      </div>
    )
  } 
}

export default Navbar;