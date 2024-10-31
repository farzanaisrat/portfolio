import React from "react";
import "../../styles/Projects.css"
import FadeInSection from "../FadeInSection";
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import Divider from "@mui/material/Divider";


class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
    }; 
  }
  
  render() {

    const projects = {
      "Visualizer of Environmental Toxicants": {
        tech: "ReactJS (ReactCharts, React-Simple-Maps)",
        description:
          "Pulling public health data from CDC’s National Environmental Public Health Tracking Network API and illustrating the data in multiple visual representations (timelines, maps, tables)",
        link: "",
        gitHub: "https://github.com/lhei-git/Visualizer-of-Environmental-Toxicants"
      },
      "Helping Hand": {
        techStack: "JavaScript, HTML, CSS",
        description:
          "Mental health web application that allows for users to take time to checkout resources, fill out a goal tracker, take mental health quizzes, journal, and post on a discussion board",
        link: "https://waynehelpinghands.000webhostapp.com/",
        gitHub: "https://github.com/WSU-4110/Mental-Health-Helper"
      },
      "Ineffable": {
        tech: "JavaScript (Three.js)",
        description:
          "Recreation of the solar system in which Earth is the center of the system. It poses as a metaphor for humans' conceitedness.",
        link:
          "https://farzanaisrat.github.io/ineffable/",
        gitHub: "https://github.com/farzanaisrat/ineffable"
      }
    };

    return (
      <div id="projects">
        <FadeInSection>
          <div className="projects-header ">
            <Divider><div className="projects-title">Projects</div></Divider>
          </div>
        </FadeInSection>

        <div className="project-contents">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}50ms`}>
                <li className="projects-cards">
                  <div className="cards-name">{key}</div>
                  <div className="cards-tech">{projects[key]["tech"]}</div>
                  <div className="cards-description">{projects[key]["description"]}</div>
                <div className="project-external-links">
                <a className="project-github" href={projects[key]["gitHub"]} target="_blank">
                    <GitHubIcon
                      style={{
                        fontSize: 40,
                        color: "#bbdefb"
                      }}
                      ></GitHubIcon>
                </a>
                {projects[key]["link"] != "" && (
                <a className="project-links" href={projects[key]["link"]} target="_blank">
                  <LinkIcon
                    style={{
                      fontSize: 40,
                      color: "#bbdefb"
                    }}
                  ></LinkIcon>
                </a>
              )}
                
                </div>  
                </li>

              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;