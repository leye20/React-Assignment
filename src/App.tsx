import React from 'react';
import Welcome from './components/welcome';
import Menu from './components/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
        <Menu name="" />
        <Welcome />
    </div>
  );
}

export default App;
