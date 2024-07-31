import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import Divider from "@mui/material/Divider";
import "../../styles/Skills.css"
import FadeInSection from "../FadeInSection";
import { skillNames } from './skillName'
import { skillPics } from './skillPics'

class Skills extends React.Component {
    
    constructor() {
        super()
      }

    render() {
        return (
        <div id="skills">
                <FadeInSection>
                    <div className="skills-header">
                        <Divider><div className="skills-title">Skills</div></Divider>
                    </div>
                </FadeInSection>

                <div className="skills-container">
                    <div className="skill-scroll">
                        <FadeInSection>
                        <Marquee 
                            gradient={false} 
                            speed={80} 
                            delay={0}
                            pauseOnHover={true}
                            play={true} 
                            direction="left"
                        >
                            {skillNames.map((skill, index) => (
                                <div className="skill-box" key={index}
                                >
                                    <img src={skillPics(skill)} alt={skill} />
                                    <h3>{skill}</h3>
                                </div>
                            ))}
                        </Marquee>
                        </FadeInSection>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Skills;