import React, { Fragment } from 'react';
import Navbar from './Navbar';
import VideosContent from './VideosContent';
import NewsSelector from './NewsSelector';
import SignUp from './SignUp';
import HeavyRotation from './HeavyRotation';
import Footer from './Footer';

function Videos() {
  return(
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="divider"></div>
      <div className="main-page">
        <VideosContent />
          <div>
          <NewsSelector />
          <SignUp />
          <HeavyRotation />
          </div>
      </div>
      <Footer />
      </div>
    )
}

export default Videos;