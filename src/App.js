import React from 'react';
import Header from './Header';
import './App.css';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">
      <Header/>
      <TinderCards/>
      <SwipeButtons />
    </div>
  );
}

export default App;
