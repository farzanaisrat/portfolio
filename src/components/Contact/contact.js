import React from "react"
import "../../styles/Contact.css"
import FadeInSection from "../FadeInSection"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Tooltip from '@mui/material/Tooltip';
import Divider from "@mui/material/Divider/Divider";


class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div id="contact">
                <FadeInSection>
                <Divider className="contact-divider">
                    <div className="contact-header">
                        <div className="contact-title">Connect!</div>
                    </div>
                </Divider>
                </FadeInSection>

                <FadeInSection>
                    <div className="contact-links" >
                        <Tooltip title="LinkedIn" placement="left">
                        <a className="contact-linkedin" href="https://www.linkedin.com/in/farzana-israt/" target="_blank">
                            <LinkedInIcon
                                style={{
                                    fontSize: 60,
                                    color: "#007ea7"
                                }}
                            />
                        </a>
                        </Tooltip>

                        <Tooltip title="Email" placement="left">
                        <a className="contact-email" href="mailto:farzanaisrat4@gmail.com">
                            <EmailIcon 
                                style={{
                                    fontSize: 60,
                                    color: "#007ea7"
                                }}
                            />
                        </a>
                        </Tooltip>

                        <Tooltip title="GitHub" placement="left">
                        <a className="contact-github" href="https://github.com/farzanaisrat" target="_blank">
                            <GitHubIcon
                                style={{
                                    fontSize: 60,
                                    color: "#007ea7"
                                }}
                            />
                        </a>
                        </Tooltip>
                        
                    </div>
                </FadeInSection>
            </div>
        );
    }
}

export default Contact;