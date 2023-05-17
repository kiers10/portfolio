import "./ContactMe.css";
import Grid from "@mui/material/Unstable_Grid2";
import ContactImg from "../../images/ContactMe.svg";
import { Button } from "@mui/material";
import { IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import { openInNewTab } from "../Page";
import Resume from "../../images/Resume.pdf";
import { motion } from "framer-motion";
import { fadeInUp } from "../Page";

const ContactMe = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      className="contact-me-section"
    >
      <div className="heading">
        <hr className="heading-before-line" />
        <p className="bt fs-lg bold">
          {`{`} <span className="wt">Contact Me</span> {`}`}
        </p>
        <hr className="heading-after-line" />
      </div>

      <Grid container spacing={5}>
        <Grid
          lg={7}
          md={12}
          display="flex"
          justifyItems="center"
          alignItems="center"
        >
          <div className="contact-me-text-wrapper secondary-font">
            <p className="dt fs-sm lh" style={{ marginTop: 0 }}>
              <span className="wt bold">Like what you see?</span> Please don't
              hesitate to reach out! Connecting with me on LinkedIn or sending
              an email are the most effective ways to reach me. I look forward
              to hearing from you!
            </p>
            <Button
              variant="outlined"
              className="cta-btn download-resume-cta"
              onClick={() => openInNewTab(Resume)}
              component={motion.div}
              whileHover={{
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              View My Resume
            </Button>
            <div style={{ marginTop: "1rem", display: "flex" }}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <IconBrandLinkedin
                  stroke={1.25}
                  size={45}
                  className="contact-me-socials-btn"
                  onClick={() =>
                    openInNewTab(
                      "https://www.linkedin.com/in/kiersten-densmore/"
                    )
                  }
                />
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <IconMail
                  stroke={1.25}
                  size={45}
                  className="contact-me-socials-btn"
                />
              </motion.div>
            </div>
          </div>
        </Grid>
        <Grid
          lg={5}
          xs={0}
          display="flex"
          justifyItems="center"
          alignItems="center"
        >
          <img src={ContactImg} alt="Contact Me" className="contact-me-img" />
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default ContactMe;
