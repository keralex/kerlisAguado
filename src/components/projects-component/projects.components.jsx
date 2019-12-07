import React from "react";
import "./projects.styles.scss";
const Project = ({
  title,
  description,
  lenguajes,
  imageUrl,
  linkCode,
  previewCode,
  year
}) => (
  <div className="circle">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div>
            <h2>{title.toUpperCase()}</h2>
            <h3>{year}</h3>
            <h4>{lenguajes}</h4>
          </div>
        </div>
        <div
          className="flip-card-back"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <p>{description}</p>
          <div>
          <a href={linkCode} target="_blank">
            Code
          </a>
          <a href={previewCode} target="_blank">
            Preview
          </a>
          </div>
         
        </div>
      </div>
    </div>
  </div>
);

export default Project;
