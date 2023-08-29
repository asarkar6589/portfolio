import React, { useRef } from "react";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import img from "../Assets/IMG1.png";
import { animate, motion } from "framer-motion";

const Home = () => {
  const projectCount = useRef(null);

  const animationProjectCount = () => {
    animate(0, 5, {
      duration: 0.5,
      onUpdate: (v) => {
        projectCount.current.textContent = v.toFixed();
      },
    });
  };
  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };
  return (
    <div id="home">
      {/* First section */}
      <section className="information">
        <div className="name">
          <motion.h1 {...animation.h1}>
            Hi, I am <br /> Arnab Sarkar
          </motion.h1>
        </div>

        <div className="text">
          <Typewriter
            options={{
              strings: [
                "A MERN Stack Developer",
                "A programmer",
                "A UI/UX Designer",
              ],
              //   cursor: "false",
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className="buttons">
          <a href="mailto:sarkararnab266@gmail.com" target="blank">
            <button id="hire">Hire Me</button>
          </a>
          <a
            href="https://drive.google.com/file/d/1oa7SJkhmvwgNG7P4FGtnjFy7oQTHQ3Jb/view?usp=sharing"
            target="blank"
          >
            <button id="resume">
              Resume <BsArrowUpRight />
            </button>
          </a>
        </div>

        <div className="numbers">
          <div>
            <p className="bold">
              <motion.span
                whileInView={animationProjectCount}
                ref={projectCount}
              >
                {/* Here we dont have to write anything. First we are giving a reference and name can be anything. */}
              </motion.span>
              +
            </p>
            <span>
              Projects Done <br />
            </span>
          </div>

          <section>
            <span className="bold">
              Contact <br />
            </span>
            <span>sarkararnab266@gmail.com</span>
          </section>
        </div>
      </section>

      {/* Second section */}
      <section className="image">
        <img src={img} alt="Arnab Sarkar" />
        <BsChevronDown />
      </section>
    </div>
  );
};

export default Home;
