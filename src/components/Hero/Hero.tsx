import "./Hero.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUp } from "../Page";
import { IconArrowBigDown } from "@tabler/icons-react";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-text-wrapper">
        <h1 className="wt fs-xxl intro">
          Hi, it's <span className="bt">Kiersten</span>.
        </h1>

        <motion.div
          variants={fadeInUp}
          initial="offscreen"
          animate="onscreendelay"
          className="hero-img-wrapper"
        >
          <p className="dt fs-xl role">
            I'm a <span className="bold">Software Engineer</span> that likes to
            design and develop things for the web.
          </p>
          <Button
            variant="outlined"
            className="cta-btn"
            component={motion.div}
            whileHover={{
              scale: 1.05,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Let's Connect!
          </Button>
        </motion.div>
      </div>
      <motion.div
        variants={fadeInUp}
        initial="offscreen"
        animate="onscreenbigdelay"
        className="scroll-cta-wrapper"
      >
        <Grid container spacing={0} direction="column">
          <Grid display="flex" justifyContent="center" alignItems="center">
            <p className="dt">Learn More</p>
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center">
            <motion.div
              animate={{ y: 10 }}
              transition={{
                duration: 1,
                delay: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <IconArrowBigDown stroke={1.25} size={40} color="#f5f5f5" />
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </div>
  );
};

export default Hero;
