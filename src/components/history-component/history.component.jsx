import React, { Component } from "react";
import "./../../styles/history.styles.scss";
import Profile from "../../assets/imagen.jpg";
const History = () => (
  <div className="history">
    <div className="left-box">
      <h1>MY HISTORY</h1>
      <p>
        Hello, my name is Kerlis Aguado. I am a developer FullStack. 
        Also I have a diploma in software development from the
        UNIMET, Venezuela. I also have done
        courses about graphic techniques and web development at the CDD in
        Caracas. I am very passionate a bout web development and web design, both
        frontend and backend.
        <br/>
        <span>Right now I'm living in Argentina, increasing my skills, working and learning more at 
        the Buenos Aires University.</span>
      </p>
    </div>
    <div className="right-box">
      <img src={Profile} alt="Kerlis Aguado" />
    </div>
  </div>
);

export default History;
