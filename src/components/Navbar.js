import React, { Component } from 'react';

class Navbar extends Component {
  
  render() {
    return (
      <div className="navbar">
        <div>
          <img src="../images/stereogumlogo.jpg" className="logo" alt=""/>
          <a href="#" className="siteTitle">Stereogum</a>
        </div>
        <div>
          <a href="#">New Music</a>
          <a href="#">Lists</a>
          <a href="#">Videos</a>
        </div>  
        <div className="siteLogos">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-spotify"></i>
        </div>
        <div className="search">
          <i className="fas fa-search"></i>
        </div>
      </div>
    )
  } 
}

export default Navbar;