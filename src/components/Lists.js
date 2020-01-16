import React, { Fragment } from 'react';
import Navbar from './Navbar';
import ListsContent from './ListsContent';
import NewsSelector from './NewsSelector';
import SignUp from './SignUp';
import HeavyRotation from './HeavyRotation';
import Footer from './Footer';

function Lists() {
  return(
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="divider"></div>
      <div className="main-page">
        <ListsContent />
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

export default Lists;