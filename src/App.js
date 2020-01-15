import React from 'react';
import Navbar from './components/Navbar';
import Featured from './components/Featured';
import Stories from './components/Stories';
import NewsSelector from './components/NewsSelector';
import SignUp from './components/SignUp';
import HeavyRotation from './components/HeavyRotation';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
