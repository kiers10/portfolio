import "./Projects.css";
import { ProjectsList } from "./ProjectsList";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { openInNewTab } from "../Page";
import { motion } from "framer-motion";
import { fadeInUp } from "../Page";

const Projects = () => {
  const projects = ProjectsList.projects.map((project, idx) => {
    let alternate = idx % 2 === 0;
    return (
      <motion.div
        variants={fadeInUp}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Grid
          container
          spacing={4}
          direction={alternate ? "row" : "row-reverse"}
          sx={{ marginBottom: "5rem" }}
        >
          <Grid
            lg={7}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <motion.div
              className={
                !alternate
                  ? "right-justify project-img-wrapper"
                  : "project-img-wrapper"
              }
              whileHover={{
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <img src={project.image} alt="" className="project-img" />
              <div
                className="overlay"
                onClick={() => openInNewTab(project.projectLink)}
              >
                <IconExternalLink
                  className="icon"
                  stroke={1.75}
                  size={45}
                  color="#f5f5f5"
                />
              </div>
            </motion.div>
          </Grid>

          <Grid lg={5} display="flex" alignItems="center">
            <Grid container spacing={4} flexWrap="nowrap">
              <Grid lg={3}>
                <hr className="projects-line" />
              </Grid>

              <Grid lg={9}>
                <div className="project-info-wrapper">
                  <p className="wt fs-md">{project.title}</p>
                  <p className="dt fs-sm">{project.description}</p>
                  <p className="bt fs-xs">{project.technologies}</p>
                </div>
                {project.githubLink && (
                  <IconBrandGithub
                    stroke={1.25}
                    size={25}
                    style={{ marginRight: "0.5rem" }}
                    className="projects-icon"
                    onClick={() => openInNewTab(project.githubLink)}
                  />
                )}
                {project.projectLink && (
                  <IconExternalLink
                    stroke={1.25}
                    size={25}
                    className="projects-icon"
                    onClick={() => openInNewTab(project.projectLink)}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </motion.div>
    );
  });

  return (
    <div className="projects-section">
      <motion.div
        variants={fadeInUp}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        className="heading"
      >
        <hr className="heading-before-line" />
        <p className="bt fs-lg bold">
          {`{`} <span className="wt"> Projects </span> {`}`}
        </p>
        <hr className="heading-after-line" />
      </motion.div>
      <div className="projects-wrapper">{projects}</div>
    </div>
  );
};

export default Projects;