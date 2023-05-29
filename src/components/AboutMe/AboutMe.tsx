import "./AboutMe.css";
import MeImg from "../../images/Me.jpg";
import Grid from "@mui/material/Unstable_Grid2";
import { motion } from "framer-motion";
import { fadeInUp } from "../Page";

const AboutMe = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      className="about-me-section"
      id="about-me"
    >
      <div className="section-heading-wrapper">
        <p className="wt fs-lg bold" style={{ marginBottom: "1px" }}>
          About Me
        </p>
        <hr className="heading-line" style={{ marginLeft: 0 }} />
      </div>

      <Grid container spacing={5}>
        <Grid lg={7} md={12}>
          <div className="about-me-text-wrapper secondary-font">
            <p className="dt fs-sm lh" style={{ marginTop: 0 }}>
              Hi there! My name is Kiersten and I am a Software Engineer that
              enjoys designing and developing full-stack applications that have
              a positive impact on people’s lives.
            </p>
            <p className="dt fs-sm lh">
              I recently graduated from the University of Central Florida with a
              Bachelor of Science in Computer Science. I am also thrilled to
              share that I will soon start my career as a{" "}
              <span className="bt bold">Software Engineer at Nextdoor</span>.
            </p>
            <p className="dt fs-sm lh">
              When I'm not coding, I enjoy playing video games, watching
              football, and longboarding.
            </p>
          </div>
        </Grid>
        <Grid lg={5}>
          <img src={MeImg} alt="Me" className="about-me-img" />
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default AboutMe;
