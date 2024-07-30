import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@mui/styles';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import "../../styles/Jobs.css"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


const Jobs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const jobExperiences = {
    "TDS Telecommunications LLC": { 
      role: "Software Engineer Intern",
      description: [
        "Used React.js and TypeScript to fix defects that are occurring on the company’s current portal website",
        "Utilized PrimeReact to aid in creating a new and modern portal website to be used by all IT teams across the company",
        "Participated in code reviews to ensure the quality of code is up to par with the team’s standards",
        "Performed code testing using Vitest to ensure code quality and reliability"
      ],
      time: "FEB 2023 - AUG 2023"
    },
    "Wayne State University, Computer Science": {
      role: "Undergraduate Research Assistant",
      description: [
        "Collaborated on a research project focused on identifying misogynistic and anti-LGBTQ+ content in GitHub comments",
        "Categorized 1500 GitHub comments to assess the presence of discriminatory language, ensuring data accuracy and consistency",
        "Worked alongside another research assistant to verify categorization and maintain alignment with research standards",
        "Research under review by ACM Transactions on Software Engineering and Methodology"
      ],
      time: "JUNE 2023 - AUG 2023"
    },
    "Wayne State University, English": {
      role: "Undergraduate Teaching Assistant/Student Assistant",
      description: [
        "Operated technology within and outside the classroom to ensure students were able to properly engage in discussion",
        "Altered and updated course contents on Canvas LMS to help 40+ students better navigate their work",
      ],
      time: "JUNE 2022 - FEB 2023"
    },
  };

  

  return (
    <div className="experience-tabs">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
      >    
        {Object.keys(jobExperiences).map((key, index) => (
          <Tab label={key} {...a11yProps(index)}/>
        ))}
      </Tabs>

    <div className="experience-contents">
      {Object.keys(jobExperiences).map((key, index) => (
        <TabPanel value={value} index={index}>
          <span className="experience-roles">
            {jobExperiences[key]["role"]}
          </span>
          <div className="experience-time">
            {jobExperiences[key]["time"]}
          </div>
          
          <ul className="experience-description">
            {jobExperiences[key]["description"].map(function (desc, i) {
              return (
                  <li key={i}>{desc}</li>
              );
            })}
          </ul>
        </TabPanel>
      ))}
      </div>
    </div>
  );
};

export default Jobs;