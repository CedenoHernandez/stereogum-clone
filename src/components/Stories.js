import React, { Component } from 'react';

class Stories extends Component {

  render() {
    return (
      <div>

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

        <container className="stories">
          <div className="news-img">
            <img src="../images/us-girls-heavy-light-cover.jpg" alt="" className="story-img"/>
          </div>
          <div className="news-brief">
            <h2>U.S. Girls - "Overtime"</h2>
            <p>Just under two years ago, Meg Remy released In A Poem Unlimited, her sixth album as U.S. Girls. While the project had already found devout…</p>
            <div className="news-info-sm">
              <a href="#" className="news-author">Ryan Leas</a>
              <p className="news-date">| January 13, 2020 - 10:03 am</p>
              <p className="comment-count">20</p>
              <i className="far fa-comment"></i>
            </div>
          </div>
        </container>

        <container className="stories">
          <div className="news-img">
            <img src="../images/dan-deacon.jpg" alt="" className="story-img"/>
          </div>
          <div className="news-brief">
            <h2>Dan Deacon - "Become a Mountain"</h2>
            <p>At the end of the month, Dan Deacon is releasing a new album, Mystic Familiar, his first proper full-length album since 2015's Gliss Rifter after…</p>
            <div className="news-info-sm">
              <a href="#" className="news-author">James Rettig</a>
              <p className="news-date">| January 13, 2020 - 10:00 am</p>
              <p className="comment-count">15</p>
              <i className="far fa-comment"></i>
            </div>
          </div>
        </container>

        <container className="stories">
          <div className="news-img">
            <img src="../images/gordi-the-cost.jpg" alt="" className="story-img"/>
          </div>
          <div className="news-brief">
            <h2>Gordi - "The Cost</h2>
            <p>The Australian Artist To Watch Gordi -- real name Sophie Payten -- released her debut album back in 2017, and today she's returned with a…</p>
            <div className="news-info-sm">
              <a href="#" className="news-author">James Rettig</a>
              <p className="news-date">| January 12, 2020 - 11:39 am</p>
              <p className="comment-count"></p>
              <i className="far fa-comment"></i>
            </div>
          </div>
        </container>

        <container className="stories">
          <div className="news-img">
            <img src="../images/rush-drummer.jpg" alt="" className="story-img"/>
          </div>
          <div className="news-brief">
            <h2>Dave Grohl Shares Eulogy For Neil Peart</h2>
            <p>Rush drummer Neil Peart passed away this week due to complications from brain cancer. And now another famous drummer, Dave Grohl of Nirvana and Foo…</p>
            <div className="news-info-sm">
              <a href="#" className="news-author">Peter Helman</a>
              <p className="news-date">| January 11, 2020 - 10:43 am</p>
              <p className="comment-count">4</p>
              <i className="far fa-comment"></i>
            </div>
          </div>
        </container>

      </div>
    )
  }
};

export default Stories;