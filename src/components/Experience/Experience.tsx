import { useState } from "react";
import "./Experience.css";
import { ExperienceList } from "./ExperienceList";
import { Tab, Tabs, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { motion } from "framer-motion";
import { fadeInUp } from "../Page";

const Experience = () => {
  const [selectedJobIdx, setSelectedJobIdx] = useState(0);
  const job = ExperienceList.experiences[selectedJobIdx];
  const isSmallScreen = useMediaQuery("(max-width:1200px)");

  const companyTabs = ExperienceList.experiences.map((experience, idx) => {
    return <Tab value={idx} label={experience.company} />;
  });

  const bullets = ExperienceList.experiences[selectedJobIdx].bullets.map(
    (bullet, idx) => {
      return <li className="dt fs-sm secondary-font">{bullet.bullet}</li>;
    }
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedJobIdx(newValue);
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      className="experience-section"
    >
      <div className="heading">
        <hr className="heading-before-line" />
        <p className="bt fs-lg bold">
          {`{`} <span className="wt"> Experience </span> {`}`}
        </p>
        <hr className="heading-after-line" />
      </div>
      <Grid container spacing={6}>
        <Grid lg={3.5}>
          <div className="experience-companys-wrapper">
            <Tabs
              value={selectedJobIdx}
              orientation={isSmallScreen ? "horizontal" : "vertical"}
              onChange={handleChange}
            >
              {companyTabs}
            </Tabs>
          </div>
        </Grid>
        <Grid lg={8.5}>
          <motion.div
            key={selectedJobIdx}
            variants={fadeInUp}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="wt fs-md" style={{ margin: 0 }}>
              {job.title} <span className="bt">@ {job.company}</span>
            </p>
            <p className="dt fs-sm" style={{ marginTop: 10 }}>
              {job.startDate} - {job.endDate}
            </p>
            <ul>{bullets}</ul>
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Experience;
