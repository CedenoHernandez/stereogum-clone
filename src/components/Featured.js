import React, { Component } from 'react';

class Featured extends Component {
  render() {
    return(
      <div className="featured">
        <button type="button" className="scroll"><i className="fas fa-chevron-left"></i></button>
        <img src="../images/Lost-In-Yesterday.jpg" alt=""/>
        <img src="../images/Moz-Not-A-Dog.jpg" alt=""/>
        <img src="../images/Donna-Summer.jpg" alt=""/>
        <img src="../images/abbey-road.jpg" alt=""/>
        <button type="button" className="scroll"><i className="fas fa-chevron-right"></i></button>
      </div>
    )
  }
};

export default Featured;