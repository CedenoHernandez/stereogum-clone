import React, { Component } from 'react';

class Featured extends Component {
  
  render() {
    return(
      <div className="featured">

        <button type="button" className="scroll">
           <i>◄</i>
        </button>
        
        {/* Display 1 */}
        
        <div className="featured-titles" id="display1">
          <img src="../images/Lost-In-Yesterday.jpg" alt="" className="featured1"/>
          <div className="featured-name">Tame Impala - "Lost In Yesterday"</div>
        </div>
        <div className="featured-titles" id="display1">
          <img src="../images/Moz-Not-A-Dog.jpg" alt="" className="featured2"/>
          <div className="featured-name">"I Don't Believe Morrissey Is Racist"</div>
        </div>
        <div className="featured-titles" id="display1">
          <img src="../images/Miss-Anthropocene.jpg" alt="" className="featured3"/>
          <div className="featured-name">Grimes Debuts "4ÆM" At The Game Awards</div>
        </div>
        <div className="featured-titles" id="display1">
          <img src="../images/abbey-road.jpg" alt="" className="featured4"/>
          <div className="featured-name"><i>Abbey Road</i> Best-Selling Vinyl Of The Decade</div>
        </div>
        

        {/* Display 2 */}
        
        <div className="featured-titles" id="display2">
          <img src="../images/the-innocence.jpg" alt="" className="featured1"/>
          <div className="featured-name">Album Of The Week: The Innocence Mission</div>
        </div>
        <div className="featured-titles" id="display2">
          <img src="../images/King-Krule.jpg" alt="" className="featured2"/>
          <div className="featured-name">King Krule - "(Don't Let The Dragon) Draag On"</div>
        </div>
        <div className="featured-titles" id="display2">
          <img src="../images/soccer-mommy.jpg" alt="" className="featured3"/>
          <div className="featured-name">Soccer Mommy - "circle the drain"</div>
        </div>
        <div className="featured-titles" id="display2">
          <img src="../images/Donna-Summer.jpg" alt="" className="featured4"/>
          <div className="featured-name">The Number Ones: Donna Summer's "MacArthur Park"</div>
        </div>
        
        
        <button type="button" className="scroll">
          <i>►</i>
        </button>

      </div>
    )
  }
};

export default Featured;