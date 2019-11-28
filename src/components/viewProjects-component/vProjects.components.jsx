import React, { Component } from "react";
import "./vProjects.styles.scss";
import Project from "../projects-component/projects.components";

export class VProjects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: "example",
          imageUrl: "example",
          id: 1,
          linkCode: "https://github.com/keralex",
          previewCode: "none"
        },
        {
          title: "example",
          imageUrl: "example",
          id: 2,
          linkCode: "https://github.com/keralex",
          previewCode: "none"
        }
      ]
    };
  }
  render() {
    return (
      <div className="wrapper">
           <div className='left'>
          <h1>PROJECTS</h1>
        </div>
        <div className="projects">
          {this.state.projects.map(({ id, ...otherSectionProps }) => (
            <Project key={id} {...otherSectionProps} />
          ))}
        </div>
     
      </div>
    );
  }
}
export default VProjects;
