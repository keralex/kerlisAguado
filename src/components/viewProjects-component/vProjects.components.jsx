import React, { Component } from "react";
import "./vProjects.styles.scss";



export class VProjects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: 'example',
          imageUrl: 'example',
          id: 1,
          linkCode: 'https://github.com/keralex',
          previewCode: 'none'
        },
        {
            title: 'example',
            imageUrl: 'example',
            id: 2,
            linkCode: 'https://github.com/keralex',
            previewCode: 'none'
          }
      ]
    };
  }
  render() {
    return(
        <div>
        <h1>holaaaaa</h1>
    </div>
    );
   
  }
}
export default VProjects;
