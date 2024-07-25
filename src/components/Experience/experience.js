import React from "react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Jobs from "./jobs";
import "../../styles/Experience.css"
import FadeInSection from "../FadeInSection";
import Divider from "@mui/material/Divider";
import { Fade } from "@mui/material";


class Experience extends React.Component {
    constructor() {
      super();
      this.state = {
      }; 
    }

    

    render() {

        return (
            <div className="experience">
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