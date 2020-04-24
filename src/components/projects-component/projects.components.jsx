import React from "react";
import "./projects.styles.scss";



const Project = ({
  title,
  description,
  lenguajes,
  imageUrl,
  linkCode,
  previewCode,
  classn,
  year
}) => 

(
  <div className="circle">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
            <h2>{title.toUpperCase()}</h2>
        </div>
        <div
          className="flip-card-back"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <p className='des'>{description}</p>
          <p>{lenguajes}</p>
          <p className='year'>{year}</p>
          <div className='links'>
            <a href={linkCode} target="_blank">
              Code
            </a>
            <a href={previewCode} target="_blank" className={`${classn}`}>
              Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
 

export default Project;
