import React, { Component } from 'react';

class NewsSelector extends Component {

  render() {
    return(
      <div className="side-news">
        <div className="news-selector">
          <i className="fas fa-chart-line" id="most-viewed"></i>
          <a href="#" id="most-viewed">MOST VIEWED</a>
          <i className="fas fa-comments" id="most-commented"></i>
          <a href="#" id="most-commented">MOST COMMENTED</a>
        </div>

        {/* Most Viewed */}
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

        {/*Most Commented*/}
        {/*
        <div className="pop-story">
          <img src="../images/Donna-Summer.jpg" alt=""/>
          <div className="story-num">01</div>
          <a href="#">The Number Ones: Donna Summer's "MacArthur Park" 513<i className="far fa-comment"></i></a>
          
        </div>

        <div className="pop-story">
          <img src="../images/Anne-Murray.jpg" alt=""/>
          <div className="story-num">02</div>
          <a href="#">The Number Ones: Anne Murray's "You Needed Me" 480<i className="far fa-comment"></i></a>
        </div>

        <div className="pop-story">
          <img src="../images/Babs-Diamond.jpg" alt=""/>
          <div className="story-num">03</div>
          <a href="#">The Number Ones: Streisdan & Diamond's "You Don't Bring Me Flowers" 363<i className="far fa-comment"></i></a>
        </div>

        <div className="pop-story">
          <img src="../images/Chic-Le-Freak.jpg" alt=""/>
          <div className="story-num">04</div>
          <a href="#">The Number Ones: Chic's "Le Freak" 341<i className="far fa-comment"></i></a>
        </div>

        <div className="pop-story">
          <img src="../images/shutupdude.jpg" alt=""/>
          <div className="story-num">05</div>
          <a href="#">Shut Up, Dude: The Week's Best & Worst Comments 193<i className="far fa-comment"></i></a>
        </div>

        <div className="pop-story">
          <img src="../images/grimes.jpg" alt=""/>
          <div className="story-num">06</div>
          <a href="#">Grimes Announces Pregnancy With Instagram Photo 178<i className="far fa-comment"></i></a>
        </div>

        <div className="pop-story">
          <img src="../images/contra10.jpg" alt=""/>
          <div className="story-num">07</div>
          <a href="#">Conta Turns 10 140<i className="far fa-comment"></i></a>
        </div>

        <div className="pop-story">
          <img src="../images/Bright-Eyes.jpg" alt=""/>
          <div className="story-num">08</div>
          <a href="#">Bright Eyes Tease Comeback 134<i className="far fa-comment"></i></a>
        </div>
        */}

      </div>
      
    )
  }
};

export default NewsSelector;