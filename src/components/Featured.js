import React, { Component } from 'react';

class Featured extends Component {
  render() {
    return(
      <div className="featured">

        <button type="button" className="scroll">
           <i>◄</i>
        </button>
        
        <div className="featured-titles">
          <img src="../images/Lost-In-Yesterday.jpg" alt="" className="featured1"/>
          <div className="featured-name">Tame Impala - "Lost In Yesterday"</div>
        </div>
        <div className="featured-titles">
          <img src="../images/Moz-Not-A-Dog.jpg" alt="" className="featured2"/>
          <div className="featured-name">"I Don't Believe Morrissey Is Racist"</div>
        </div>
        <div className="featured-titles">
          <img src="../images/Miss-Anthropocene.jpg" alt="" className="featured3"/>
          <div className="featured-name">Grimes Debuts "4AEM" At The Game Awards</div>
        </div>
        <div className="featured-titles">
          <img src="../images/abbey-road.jpg" alt="" className="featured4"/>
          <div className="featured-name"><i>Abbey Road</i> Best-Selling Vinyl Of The Decade</div>
        </div>
        
        <button type="button" className="scroll">
          <i>►</i>
        </button>

      </div>
    )
  }
};

export default Featured;