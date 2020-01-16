import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import NewMusic from './components/NewMusic';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/newmusic' component={NewMusic} />
      </Switch>

      
    </Router>
  );
}

export default App;
