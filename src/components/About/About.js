import React from "react"
import "../../styles/About.css";
import FadeInSection from "../FadeInSection";


class About extends React.Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <div id="about">
        <FadeInSection>
        <div className="about-header">Welcome, it's Farzana.</div>
        </FadeInSection>
        
        <FadeInSection delay={`500ms`}>
          <div className="about-description">
            I'm a recent Computer Science Honors graduate from Wayne State University with hands-on experience in 
            technical internships, teaching assistance, research, and software projects.
          </div>
          </FadeInSection>
          
          
      </div>
    );
  }
}

export default About;