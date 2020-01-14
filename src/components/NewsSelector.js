import React, { Component } from 'react';

class NewsSelector extends Component {

  render() {
    return(
      <div>
        <div className="news-selector">
          <i className="fas fa-chart-line" id="most-viewed"></i>
          <a href="#" id="most-viewed">MOST VIEWED</a>
          <i className="fas fa-comments" id="most-commented"></i>
          <a href="#" id="most-commented">MOST COMMENTED</a>
        </div>


        <div className="pop-story">
          <img src="../images/BlackMidi.jpg" alt=""/>
          <div className="story-num">01</div>
          <a href="#">Hear Black Midi's Ed Sheeran Diss Track "ded sheeran (ed sheeran send) part 1"</a>
        </div>

        <div className="pop-story">
          <img src="../images/Gigaton.png" alt=""/>
          <div className="story-num">02</div>
          <a href="#">Pearl Jam Announce New Album <i>Gigaton</i></a>
        </div>

        <div className="pop-story">
          <img src="../images/Babs-Diamond.jpg" alt=""/>
          <div className="story-num">03</div>
          <a href="#">The Number Ones: Barbara Streisand & Neil Diamond's "You Don't Bring Me Flowers"</a>
        </div>

        <div className="pop-story">
          <img src="../images/rush-drummer.jpg" alt=""/>
          <div className="story-num">04</div>
          <a href="#">Dave Grohl Shares Eulogy For Neil Peart</a>
        </div>

        <div className="pop-story">
          <img src="../images/PearlJam.jpg" alt=""/>
          <div className="story-num">05</div>
          <a href="#">Pearl Jam Tease "Gigaton" in Augmented Reality</a>
        </div>

        <div className="pop-story">
          <img src="../images/us-girls-heavy-light-cover.jpg" alt=""/>
          <div className="story-num">06</div>
          <a href="#">U.S. Girls - "Overtime"</a>
        </div>

        <div className="pop-story">
          <img src="../images/Roddy-Ricch.jpg" alt=""/>
          <div className="story-num">07</div>
          <a href="#">Roddy Ricch's "The Box" Blocks Justin Bieber From A #1 Debut</a>
        </div>

        <div className="pop-story">
          <img src="../images/randy-newman.jpg" alt=""/>
          <div className="story-num">08</div>
          <a href="#">Randy Newman, Elton John Up For Best Original Song Oscars</a>
        </div>

      </div>
      
    )
  }
};

export default NewsSelector;