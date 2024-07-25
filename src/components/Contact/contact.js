import React from "react"
import FadeInSection from "../FadeInSection"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Divider from "@mui/material/Divider"; 
import "../../styles/Contact.css"

class Contact extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div id="contact">
                <FadeInSection>
                    <div className="contact-header">
                        <Divider><div className="contact-title">Let's Chat!</div></Divider>
                    </div>

                    <div className="contact-links" >
                        <a className="contact-linkedin" href="https://www.linkedin.com/in/farzana-israt/" target="_blank">
                            <LinkedInIcon
                                style={{
                                    fontSize: 60,
                                    color: "#007ea7"
                                }}
                                />
                        </a>
                        <a className="contact-email" href="mailto:farzanaisrat4@gmail.com">
                            <EmailIcon 
                                style={{
                                    fontSize: 60,
                                    color: "#007ea7"
                                }}
                            />
                        </a>
                        <a className="contact-github" href="https://github.com/farzanaisrat" target="_blank">
                            <GitHubIcon
                                style={{
                                    fontSize: 60,
                                    color: "#007ea7"
                                }}
                            />
                        </a>
                        
                    </div>
                </FadeInSection>
            </div>
        )
    }
}

export default Contact;