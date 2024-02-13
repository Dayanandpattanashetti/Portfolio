import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-600%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero ">
      <div className="wrapper ">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Dayanand Pattanshetti</motion.h2>
          <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons flex gap-5">
            <a
              href="https://docs.google.com/document/d/1GIdqqdgHeW-EES8RD3WjAEjHuk331vFpmnvFCcwnqaE/edit?usp=sharing"
              download
              target="_blank"
            >
              <motion.button
                variants={textVariants}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
                className="py-3 px-4 font-normal md:p-4 md:font-medium"
              >
                <span>
                  <img src="view.png" className="h-5 inline -mt-1" alt="" />
                </span>{" "}
                <span>Resume/CV</span>
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button
                className="py-3 px-4 font-normal md:p-4 md:font-medium"
                variants={textVariants}
              >
                Contact Me
              </motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
            className="h-12 w-12"
          />
        </motion.div>
      </div>
      <div className="imageContainer ">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;

{
  /* <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Passionate Full Stack Developer
      </motion.div> */
}
