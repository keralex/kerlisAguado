import React, { Component } from "react";
import "./vProjects.styles.scss";
import Project from "../projects-component/projects.components";

export class VProjects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: "Dress It",
          description:"eCommerce",
          lenguajes:"React",
          imageUrl: "example",
          id: 1,
          linkCode: "https://github.com/keralex/dressIt",
          previewCode: "https://github.com/keralex/dressIt",
          year: "2019"
        },
        {
          title: "Background Generator",
          description:"App to generate background gradiends code.",
          lenguajes:"Javascript",
          imageUrl: "example",
          id: 2,
          linkCode: "https://github.com/keralex/Background-Generator",
          previewCode: "https://keralex.github.io/Background-Generator/",
          year: "2019"

        }, {
          title: "APP TO-DO",
          description:"Task list app",
          lenguajes:"React JS",
          imageUrl: "example",
          id: 3,
          linkCode: "https://github.com/keralex/ToDo-React",
          previewCode: "https://github.com/keralex/ToDo-React",
          year: "2019"

        },
        {
          title: "pokedex",
          description:"POKEMON SEARCH APP",
          lenguajes:"ReactJs",
          imageUrl: "example",
          id: 4,
          linkCode: "https://github.com/keralex/pokedex",
          previewCode: "https://keralex.github.io/pokedex/",
          year: "2019"

        },
        {
          title: "VUELOS GUACAMAYA",
          description:"administrative system simulation of an airline",
          lenguajes:"Angular/NodeJs/mySQL",
          imageUrl: "example",
          id: 5,
          linkCode: "https://github.com/keralex/Guacamaya",
          previewCode: null,
          year: "2019"

        },
        {
          title: "uMakeIt",
          description:"Delivery Sushi App",
          lenguajes:"Angular 6",
          imageUrl: "example",
          id: 6,
          linkCode: "https://github.com/keralex/umakeit/tree/master/proyecto",
          previewCode: "https://umakeit-5d5ca.firebaseapp.com/login",
          year: "2018"

        },
     
      ]
    };
  }
  render() {
    return (
      <div className='projects'>
          <h1>PROJECTS</h1>
          <div className="wrapper">
           
             {this.state.projects.map(({ id, ...otherSectionProps }) => (
               <Project key={id} {...otherSectionProps} />
             ))}
        
         </div>
      </div>
     
    );
  }
}
export default VProjects;
