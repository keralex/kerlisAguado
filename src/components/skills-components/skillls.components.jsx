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
             <li>HTML CSS</li>
             <li>JAVASCRIPT TYPESCRIPT</li>
             <li>SQL FIREBASE</li>
             <li>REACTJS ANGULAR 2+</li>
             <li>REDUX NOJEJS</li>
             <li>BOOTSTRAP SASS</li>
             <li>GITHUB JAVA</li>
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
             <li>PHOTOSHOP</li>
             <li>ILLUSTRATOR</li>
             <li>CANVA LUNACY</li>
             <li>MICROSOFT OFFICE</li>
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
