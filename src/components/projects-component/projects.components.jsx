import React from 'react';
import './projects.styles.scss';
const Project =({title,imageUrl,linkCode,previewCode})=>(
    <div className='circle'>
     <div className="flip-card">
        <div className="flip-card-inner">
        <div className="flip-card-front"><h2>{title.toUpperCase()}</h2></div>
          <div className="flip-card-back" style={{backgroundImage:`url(${imageUrl})`}}>
            <a href={linkCode} target='_blank'>Code</a>
            <a href={previewCode} target='_blank'>Preview</a>
          </div>
        </div>
      </div> 
    </div>
)


export default Project;
