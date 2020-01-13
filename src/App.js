import React from 'react';
import Navbar from './components/Navbar';
import Featured from './components/Featured';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Featured />
        
        <Footer />
    </div>
  );
}

export default App;
