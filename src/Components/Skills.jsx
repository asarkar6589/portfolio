import React from "react";
import java from "../Assets/java.png";
import html from "../Assets/html.png";
import css from "../Assets/css-3.png";
import js from "../Assets/js.png";
import reactIcon from "../Assets/library.png";
import nodeIcon from "../Assets/nodejs.png";
import expressIcon from "../Assets/icons8-express-js-100.png";
import mongoIcon from "../Assets/mongodb.png";
import { motion } from "framer-motion";

const Skills = () => {
  const animations = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div id="skills">
      <h1>Skills</h1>

      <div className="container">
        <motion.div className="icons" {...animations}>
          <img src={java} alt="Java" />
          <p>Java</p>
        </motion.div>

        <motion.div className="icons" {...animations}>
          <img src={html} alt="HTML" />
          <p>HTML</p>
        </motion.div>

        <motion.div className="icons" {...animations}>
          <img src={css} alt="CSS" />
          <p>CSS</p>
        </motion.div>

        <motion.div className="icons" {...animations}>
          <img src={js} alt="JavaScript" />
          <p>JavaScript</p>
        </motion.div>

        <motion.div className="icons" {...animations}>
          <img src={reactIcon} alt="React Js" />
          <p>React Js</p>
        </motion.div>

        <motion.div className="icons" {...animations}>
          <img src={nodeIcon} alt="Node Js" />
          <p>Node Js</p>
        </motion.div>

        <motion.div className="icons" {...animations}>
          <img src={expressIcon} alt="Express Js" />
          <p>Express Js</p>
        </motion.div>

        <motion.div className="icons" {...animations}>
          <img src={mongoIcon} alt="Express Js" />
          <p>Mongodb</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
