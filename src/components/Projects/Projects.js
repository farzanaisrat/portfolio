import React from "react";
import "../../styles/Projects.css"
import FadeInSection from "../FadeInSection";
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';


class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
    }; 
  }
  
  render() {

    const projects = {
      "Visualizer of Environemental Toxicants": {
        desc:
          "Pulling public health data from CDC’s National Environmental Public Health Tracking Network API and illustrating the data in multiple visual representations (timelines, maps, tables)",
        techStack: "ReactJS (ReactCharts, React-Simple-Maps)",
        gitHub: "https://github.com/lhei-git/Visualizer-of-Environmental-Toxicants"
      },
      "Helping Hand": {
        desc:
          "Mental health web application that allows for users to take time to checkout resources, fill out a goal tracker, take mental health quizzes, journal, and post on a discussion board",
        techStack: "JavaScript, HTML, CSS",
        link: "https://waynehelpinghands.000webhostapp.com/",
        gitHub: "https://github.com/WSU-4110/Mental-Health-Helper"
      },
      "Ineffable": {
        desc:
          "Recreation of the solar system in which Earth is the center of the system. It poses as a metaphor for humans' conceitedness.",
        techStack: "JavaScript (Three.js)",
        link:
          "https://farzanaisrat.github.io/ineffable/",
        gitHub: "https://github.com/farzanaisrat/ineffable"
      }
    };

    return (
      <div id="projects">
        <div className="projects-header ">
          <div className="projects-title">Projects</div>
        </div>
        
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}20ms`}>
                <li className="projects-card">
                  <div className="card-header">
                  </div>
                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                <a className="project-links" href={projects[key]["link"]} target="_blank">
                  <LinkIcon
                    style={{
                      fontSize: 25,
                      color: "var(--lightest-slate)"
                    }}
                  ></LinkIcon>
                </a>

                <a className="project-github" href={projects[key]["gitHub"]}>
                    <GitHubIcon
                      style={{
                        fontSize: 25,
                        color: "var(--lightest-slate)"
                      }}
                      ></GitHubIcon>
                </a>
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