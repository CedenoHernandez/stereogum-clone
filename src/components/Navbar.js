import React, { Component } from 'react';

class Navbar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    if(this.state.clicked) {
      document.querySelector('.dropdown').style.display = 'none';
      this.setState({ clicked: false });
    
    } else { 
      document.querySelector('.dropdown').style.display = 'block';
      this.setState({ clicked: true });
    }
  }


  render() {
    
    return (
      <div className="navbar">
        <div>
          <img src="../images/stereogumlogo.jpg" className="logo" alt=""/>
          <a href="/" id="siteTitle">Stereogum</a>
        </div>
        <div className="pageLinks">
          <a href="#" className="columns"onClick={this.handleClick}>Columns <i className="fas fa-caret-down"></i></a>
          <div className="dropdown">
            <table onClick={this.handleClick}>
              <tr>
                <td>2010s In Review</td>
                <td>Gummy Awards</td>
                <td>The Anniversary</td>
              </tr>
              <tr>
                <td>10 Best Songs</td>
                <td>Interview</td>
                <td>The Black Market</td>
              </tr>
              <tr>
                <td>Album of the Week</td>
                <td>Premature Evaluation</td>
                <td>The Number Ones</td>
              </tr>
              <tr>
                <td>Band to Watch</td>
                <td>Shut Up Dude</td>
                <td>The Week in Pop</td>
              </tr>
              <tr>
                <td>Breaks With Tradition</td>
                <td>Sounding Board</td>
                <td>Ugly Beauty</td>
              </tr>
              <tr>
                <td>Cover Story</td>
                <td>Status Ain't Hood</td>
                <td>Ultimate Playlist</td>
              </tr>
              <tr>
                <td>Counting Down</td>
                <td>Stereogum Sessions</td>
                <td>All Columns</td>
              </tr>
              <tr>
                <td>Gotcha Covered</td>
                <td>5 Best Songs of the Week</td>
                <td></td>
              </tr>

            </table>
          </div>
          <a href="/newmusic">New Music</a>
          <a href="/lists">Lists</a>
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