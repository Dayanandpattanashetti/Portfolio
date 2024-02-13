import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import PortfolioCard from "../portfolioCard/PortfolioCard";

const items = [
  {
    id: 0,
    title: "Thala For A Reason",
    img: "thala.png",
    desc: 'Funny application based on MS Dhoni meme, go enter your "Thala For A Reason" and see the magic!',
    url: "https://dayanandpattanashetti.github.io/ThalaForAReason/",
  },
  {
    id: 1,
    title: "Youtube Clone",
    img: "youtube.png",
    desc: "React-based application that mimics the functionalities of YouTube, allowing users to view and interact with video content. Tailwind CSS is employed for styling, ensuring a modern and responsive user interface.",
    url: "https://daya-yt-clone.netlify.app/",
  },
  {
    id: 2,
    title: "Versa Blog Cebtral",
    img: "blog.png",
    desc: "Developed a feature-rich blogging application using the MERN stack, integrating React for frontend UI/UX, Express and Node for backend REST API, and MongoDB for data storage. Implemented JWT authentication for enhanced security, enabling secure user authentication and authorization, along with functionalities like user registration, login, and CRUD operations.",
    url: "https://versablogcentral.onrender.com/",
  },
  {
    id: 3,
    title: "Library Management System",
    img: "library.png",
    desc: "Developed with Node and Express, seamlessly integrating MongoDB for efficient data handling, emphasizing backend functionality over UI/UX. Achieved a dynamic UI through EJS and express-ejs-layouts, complemented by RESTful routes for seamless CRUD operations.",
    url: "https://library-production-03e2.up.railway.app/",
  },
  {
    id: 4,
    title: "Dukaan-Challenge",
    img: "dukaan.png",
    desc: "Participated in Dukaan's frontend engineering hiring challenge, tasked with coding a Figma design into a pixel-perfect React application. Successfully completed and submitted the assignment, showcasing my proficiency in React and Tailwind CSS.",
    url: "https://dayanandpattanashetti.github.io/dukaan/",
  },
  {
    id: 5,
    title: "Weather App",
    img: "weatherapp.png",
    desc: "Weather application using JavaScript, Axios, and the OpenWeatherMap API. Implemented error handling for a smooth user experience. The displayed information includes temperature, wind speed, humidity, and a weather icon. The project demonstrates skills in front-end development, API integration, and asynchronous programming.",
    url: "https://dayanandpattanashetti.github.io/WeatherApp/",
  },
  {
    id: 6,
    title: "React Calculator",
    img: "calculator.png",
    desc: "NOT YOUR REGULAR CALCULATOR, implemented custom arithmetic logic, avoiding the use of external math libraries. A reducer-based state management system to handle user input, arithmetic operations, and dynamic operand formatting.",
    url: "https://dayanandpattanashetti.github.io/React-Calculator/",
  },
  {
    id: 7,
    title: "E-Commerce - Homepage Design",
    img: "kommanari.png",
    desc: "A fully responsive frontend design of E-commerce Website, built using HTML and CSS",
    url: "https://dayanandpattanashetti.github.io/Ecommercewebsite/",
  },
];

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress w-full py-4 px-6 rounded-t-lg text-center text-orange text-3xl font-bold">
        <h1>Featured Projects</h1>
        <motion.div
          style={{ scaleX }}
          className="progressBar h-2 mt-4 bg-white rounded-full"
        ></motion.div>
      </div>
      <div className="grid justify-center gap-20 md:w-[1366px] md:gap-10 mx-auto px-6 py-8">
        {items.map((item) => (
          <PortfolioCard props={item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
