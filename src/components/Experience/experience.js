import React from "react";
import Jobs from "./jobs";
import "../../styles/Experience.css"
import FadeInSection from "../FadeInSection";
import Divider from "@mui/material/Divider";


class Experience extends React.Component {
    constructor() {
      super();
      this.state = {
      }; 
    }

    

    render() {

        return (
            <div id="experience">
                <FadeInSection>
                    <div className="experience-header">
                        <Divider><div className="experience-title">Experience</div></Divider>
                    </div>
                    <Jobs></Jobs>
                </FadeInSection>
            </div>
        );
    }
}

export default Experience;