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
          <i className="fab fa-facebook-f fa-lg"></i>
          <i className="fab fa-twitter fa-lg"></i>
          <i className="fab fa-instagram fa-lg"></i>
          <i className="fab fa-spotify fa-lg"></i>
        </div>
        <div className="search">
          <i className="fas fa-search fa-lg"></i>
        </div>
      </div>
    )
  } 
}

export default Navbar;