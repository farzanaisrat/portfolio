import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@mui/styles';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import "../../styles/Jobs.css"
import FadeInSection from "../FadeInSection";
import { duration } from "@mui/material";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}
{/*
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    //borderRight: `1px solid ${theme.palette.divider}`
  },
}));
*/}

const Jobs = () => {
  //const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "TDS Telecommunications LLC": { 
      jobTitle: "Software Engineer Intern",
      duration: "FEB 2023 - AUG 2023",
      desc: [
        "Used React.js and TypeScript to fix defects that are occurring on the company’s current portal website",
        "Utilized PrimeReact to aid in creating a new and modern portal website to be used by all IT teams across the company",
        "Participated in code reviews to ensure the quality of code is up to par with the team’s standards",
        "Performed code testing using Vitest to ensure code quality and reliability"
      ]
    },
    "Wayne State University, Computer Science": {
      jobTitle: "Undergraduate Research Assistant",
      duration: "JUNE 2023 - AUG 2023",
      desc: [
        "Collaborated on a research project focused on identifying misogynistic and anti-LGBTQ+ content in GitHub comments",
        "Categorized 1500 GitHub comments to assess the presence of discriminatory language, ensuring data accuracy and consistency",
        "Worked alongside another research assistant to verify categorization and maintain alignment with research standards",
        "Research under review by ACM Transactions on Software Engineering and Methodology"
      ]
    },
    "Wayne State University, English": {
      jobTitle: "Undergraduate Teaching Assistant/Student Assistant",
      duration: "JUNE 2022 - FEB 2023",
      desc: [
        "Operated technology within and outside the classroom to ensure students were able to properly engage in discussion",
        "Altered and updated course contents on Canvas LMS to help 40+ students better navigate their work",
      ]
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="joblist-tabs">
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
    <div className="joblist-contents">
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"]}
          </span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                  <li key={i}>{descItem}</li>
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