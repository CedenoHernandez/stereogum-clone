import React, { Fragment } from 'react';
import Navbar from './Navbar';
import NewMusicContent from './NewMusicContent';
import NewsSelector from './NewsSelector';
import SignUp from './SignUp';
import HeavyRotation from './HeavyRotation';
import Footer from './Footer';

function NewMusic() {
  return(
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="divider"></div>
      <div className="main-page">
        <NewMusicContent />
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

export default NewMusic;