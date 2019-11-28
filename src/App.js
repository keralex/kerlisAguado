import React from 'react';
import './App.scss';
import Home from './components/home-component/home.component';
import History from './components/history-component/history.component';
import Skills from './components/skills-components/skillls.components';
import VProjects from './components/viewProjects-component/vProjects.components';


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
            <a href="#projects">Projects</a>
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
        <Skills/>
      </div>
      <div id='projects'>
        <VProjects/>
      </div>
      

    </div>
  );
}

export default App;
