import React from 'react';
import Navbar from './components/Navbar';
import Featured from './components/Featured';
import Stories from './components/Stories';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Featured />
        <div className="main-page">
          <Stories />
          <SignUp />
        </div>
        
        <Footer />
    </div>
  );
}

export default App;
