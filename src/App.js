import React from 'react';
import NavBar from './components/navBar';
import Matches from './components/matches';
import NavItems from './components/navItems';
import './App.css';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <NavItems/>
      <Matches/>
    </div>
  );
}

export default App;
