import React from "react";
import "./../../styles/skills.styles.scss";
const Skills = () => (
  <div>
    <h1>MY SKILLS</h1>
<div className="skills">
    <div className="left-circle"> 
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front"><h2>IT SKILLS</h2></div>
          <div className="flip-card-back">
            <ul>
              <li>HTML | CSS</li>
              <li>JavaScript | TypeScript</li>
              <li>Bootstrap | Sass</li>
              <li>ReactJs | VueJs</li>
              <li>React Native</li>
              <li>REDUX | NODEJS</li>
              <li>SMARTY</li>
              <li>SQL | FIREBASE</li>
              <li>GITHUB | JAVA</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="right-circle">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front"><h2>DESIGNING SKILLS</h2></div>
          <div className="flip-card-back">
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
