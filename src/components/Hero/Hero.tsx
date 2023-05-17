import "./Hero.css";
import HeroImg from "../../images/Hero.svg";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { fadeInUp } from "../Page";

const Hero = () => {
  return (
    <div className="hero-section">
      <Grid container spacing={2}>
        <Grid
          lg={7}
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
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
                I enjoy <span className="bold">designing</span> and{" "}
                <span className="bold">developing</span> digital experiences.
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
        </Grid>
        <Grid
          lg={5}
          xs={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <motion.div
            variants={fadeInUp}
            initial="offscreen"
            animate="onscreendelay"
            className="hero-img-wrapper"
          >
            <img src={HeroImg} alt="Hero" style={{ width: "100%" }} />
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
