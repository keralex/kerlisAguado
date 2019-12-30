import React, { Component } from "react";
import "./history.styles.scss";
import Profile from "../../assets/imagen.jpg";
const History = () => (
  <div className="history">
    <div className="left-box">
      <h1>MY HISTORY</h1>
      <p>
        Hello, my name is Kerlis Aguado. I am a systems engineering student and
        I am in my last year. Also I have a diploma in software development from the
        UNIMET, Venezuela. I also have done
        courses about graphic techniques and web development at the CDD in
        Caracas. I am very passionate a bout web development and web design, both
        frontend and backend, and I am working to continue improving my skills
        every day.
      </p>
      <h2>WORKING TO BE BETTER</h2>
    </div>
    <div className="right-box">
      <img src={Profile} alt="Kerlis Aguado" />
    </div>
  </div>
);

export default History;
