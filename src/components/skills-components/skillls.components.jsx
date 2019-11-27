import React from "react";
import "./skills.styles.scss";
const Skills = () => (
  <div>
    <h1>MY SKILLS</h1>
<div className="skills">
    <div className="left-circle"> 
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><h2>IT SKILLS</h2></div>
          <div class="flip-card-back">
           <ul>
             <li>HTML</li>
             <li>CSS</li>
             <li>JAVASCRIPT</li>
             <li>SASS</li>
             <li>SQL</li>
             <li>TYPESCRIPT</li>
             <li>ANGULAR 2+</li>
             <li>REACTJS</li>
             <li>NOJEJS</li>
             <li>REDUX</li>
             <li>FIREBASE</li>
             <li>BOOTSTRAP</li>
             <li>JAVA</li>
             <li>GITHUB</li>
           </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="right-circle">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><h2>DESIGNING SKILLS</h2></div>
          <div class="flip-card-back">
          <ul>
             <li>ADOBE PHOTOSHOP</li>
             <li>ADOBE ILLUSTRATOR</li>
             <li>CANVA</li>
             <li>LUNACY</li>
             <li>WORD</li>
             <li>EXCEL</li>
             <li>POWER POINT</li>
             <li>ONE NOTE</li>
             <li>GOOGLE DOCS</li>
             <li>GOOGLE SHEETS</li>
           </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
);

export default Skills;
