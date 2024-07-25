import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import Divider from "@mui/material/Divider";
import "../../styles/Skills.css"
import FadeInSection from "../FadeInSection";
import { skillsData } from './skillsData'
import { skillsImage } from './skillsImage'

class Skills extends React.Component {
    
    constructor() {
        super()
      }

    render() {
    const skillBoxStyle = {
        boxShadow: `0px 0px 30px`
    }

    return (
        
        <div id="skills" >
            <FadeInSection>
                <div className="skills-header">
                    <Divider><div className="skills-title">Skills</div></Divider>
                </div>
            </FadeInSection>

            <div className="skillsContainer">
                <div className="skill--scroll">
                    <FadeInSection>
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3>
                                    {skill}
                                </h3>
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