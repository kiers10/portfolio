import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconDownload,
} from "@tabler/icons-react";
import AboutMe from "./AboutMe/AboutMe";
import Experience from "./Experience/Experience";
import Hero from "./Hero/Hero";
import "./Page.css";
import Projects from "./Projects/Projects";
import ContactMe from "./ContactMe/ContactMe";
import Resume from "../images/Resume.pdf";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

export const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

export const fadeInUp = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  onscreendelay: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 3 },
  },
};

const Page = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <>
      <div style={{ zIndex: 0 }}>
        <ParticleBackground />
      </div>
      <div style={{ position: "relative", zIndex: 100 }}>
        {!isSmallScreen && (
          <>
            <div className="socials-wrapper">
              <hr className="socials-before-line" />
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <IconBrandLinkedin
                  stroke={1.25}
                  size={35}
                  className="socials-btn"
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
                <IconBrandGithub
                  stroke={1.25}
                  size={35}
                  className="socials-btn"
                  onClick={() => openInNewTab("https://github.com/kiers10/")}
                />
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <IconDownload
                  stroke={1.25}
                  size={35}
                  className="socials-btn"
                  onClick={() => openInNewTab(Resume)}
                />
              </motion.div>
            </div>

            <div className="email-wrapper">
              <p className="email">kierstendensmore@knights.ucf.edu</p>
              <hr className="email-after-line" />
            </div>
          </>
        )}
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <ContactMe />
      </div>
    </>
  );
};

export default Page;
