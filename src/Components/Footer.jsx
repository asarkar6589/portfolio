import React from "react";
import img from "../Assets/IMG1.png";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container"></div>
      <div className="container1">
        <img src={img} alt="Arnab Sarkar" />
        <p>Eat, sleep, code, Repeat</p>
      </div>
      <div className="container2">
        <div className="socialMedia">
          <a
            href="https://www.linkedin.com/in/arnab-sarkar-676813202/"
            target="blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/asarkar6589" target="blank">
            <AiFillGithub />
          </a>
          <a href="https://www.instagram.com/sarkararnab266/" target="blank">
            <AiFillInstagram />
          </a>
        </div>
        <a href="#home">
          <AiOutlineArrowUp />
        </a>
      </div>
    </div>
  );
};

export default Footer;
