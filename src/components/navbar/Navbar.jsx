import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome
        </motion.span>
        <div className="social -mt-6 md:mt-0">
          <a href="https://www.linkedin.com/in/daya2001/" target="_blank">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/Dayanandpattanashetti" target="_blank">
            <img src="/github.svg" alt="" />
          </a>
          <a href="https://twitter.com/its_dayanand" target="_blank">
            <img src="/twitter.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
