import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Featured from './Featured';
import Stories from './Stories';
import NewsSelector from './NewsSelector';
import SignUp from './SignUp';
import HeavyRotation from './HeavyRotation';
import Footer from './Footer';

function Home() {
  return(
    <div className="App">
              <div>
                <Navbar />
              </div>
              <div>
                <Featured />
              </div>
              <div className="main-page">
                <Stories />
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

export default Home;