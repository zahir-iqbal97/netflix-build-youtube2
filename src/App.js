import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import Banner from './Banner';
import Row from './Row';

function App() {
  return (
    <div className="app">
      <HomeScreen />
      <Banner />
      <Row />
    </div>
  );
}

export default App;
