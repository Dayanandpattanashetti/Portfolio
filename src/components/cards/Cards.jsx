import React from "react";
import Card from "../card/Card";
const Cards = () => {
  const data = {
    "C++": "cpp.svg",
    Python: "python.svg",
    HTML: "html.svg",
    CSS: "css.svg",
    Bootstrap: "bootstrap.svg",
    "Tailwind CSS": "tailwind.svg",
    JavaScript: "javascript.svg",
    "React JS": "react.svg",
    "Node JS": "node.svg",
    "Express JS": "express.svg",
    "Mongo DB": "mongo.svg",
    SQL: "sql.png",
  };

  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {Object.keys(data).map((item, index) => (
        <Card key={index} name={item} url={data[item]} />
      ))}
    </div>
  );
};

export default Cards;
