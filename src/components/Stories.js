import React, { Component } from 'react';

class Stories extends Component {

  render() {
    return (
      <container className="stories">
          <div className="news-img">
            <img src="../images/Gigaton.png" alt="" className="story-img"/>
          </div>
          <div className="news-brief">
            <h2>Pearl Jam Announces New Album <i>Gigaton</i></h2>
            <p>Pearl Jam have been talking about a new album for what feels like forever, and last week they began teasing something called "Gigaton" via augmented…</p>
            <div className="news-info-sm">
              <a href="#" className="news-author">Chris DeVille</a>
              <p className="news-date">| January 13, 2020 - 1:22 pm</p>
              <p className="comment-count">62</p>
              <i className="far fa-comment"></i>
            </div>
          </div>
      </container>
    )
  }
};

export default Stories;