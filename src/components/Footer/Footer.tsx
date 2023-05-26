import { motion } from "framer-motion";
import { fadeInUp } from "../Page";
import "./Footer.css";

const Footer = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      id="footer"
      className="footer-section"
    >
      <p className="dt fs-xxs center">
        Designed & Developed by Kiersten Densmore
      </p>
      <p className="dt fs-xxs center">Design inspired by Brittany Chiang</p>
    </motion.div>
  );
};

export default Footer;
