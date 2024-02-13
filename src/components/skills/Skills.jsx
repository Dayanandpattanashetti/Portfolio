import { useRef } from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";
import Cards from "../cards/Cards";
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box">
          <Cards />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
