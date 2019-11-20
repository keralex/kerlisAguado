import React from 'react';
import './App.scss';
import Home from './components/home-component/home.component';
import History from './components/history-component/history.component';


function App() {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <Home id='home' />
      </div>
      <div id='About'>
        <History />
      </div>

    </div>
  );
}

export default App;
