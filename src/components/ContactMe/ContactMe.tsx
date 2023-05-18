import "./ContactMe.css";
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
      <div className="section-heading-wrapper">
        <p
          className="wt fs-lg bold"
          style={{ textAlign: "center", marginBottom: "1px" }}
        >
          Like What You See?
        </p>
        <hr className="heading-line" />
      </div>

      <div className="contact-me-text-wrapper secondary-font">
        <p className="dt fs-sm lh" style={{ marginTop: 0 }}>
          Please don't hesitate to reach out! Connecting with me on LinkedIn or
          sending an email are the most effective ways to reach me. I look
          forward to hearing from you!
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
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
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
                openInNewTab("https://www.linkedin.com/in/kiersten-densmore/")
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
    </motion.div>
  );
};

export default ContactMe;
