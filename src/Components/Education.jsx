import React from "react";
import kv from "../Assets/kvs-logo.png";
import gcettb from "../Assets/GCETTB LOGO.png";
import { motion } from "framer-motion";

const Education = () => {
  const animations = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
    transition: {
      duration: 0.3,
      delay: 0.5,
    },
  };

  const animations2 = {
    initial: {
      x: "100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
    transition: {
      duration: 0.3,
      delay: 0.3,
    },
  };

  return (
    <div id="education">
      <h1>Education</h1>

      <div className="container">
        {/* Current Education */}
        <motion.div className="edu1 edu" {...animations}>
          <p>
            Currently I am a <b>4th</b> year under graduate studying in{" "}
            <b>Computer Science and Engineering</b> department Government
            College of Engineering & Textile Technology, Berhampore which is
            under the university{" "}
            <b>MAULANA ABUL KALAM AZAD UNIVERSITY OF TECHNOLOGY, (W.B.)</b>
          </p>
          <a href="http://www.gcettb.ac.in/" target="blank">
            <img
              src={gcettb}
              alt="Government College of Engineering & Textile Technology, Berhampore"
            />
          </a>
        </motion.div>

        {/* 10th and 12th */}
        <motion.div className="edu2 edu" {...animations2}>
          <p>
            I completed my 10th in <b>2018</b> and 12th in <b>2020</b> from
            Kendriya Vidyalaya No - 2 AFS Pune - 32 with an aggregate score of{" "}
            <b>84.2%</b> in class <b>10th</b> and <b>93.2%</b> in class{" "}
            <b>12th</b>
          </p>
          <a href="https://no2puneafs.kvs.ac.in/" target="blank">
            <img src={kv} alt="Kendriya Vidyalaya No - 2 AFS Pune - 32" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
