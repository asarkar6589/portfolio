import React, { useState } from "react";
import vg from "../Assets/vg.png";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [disabledBtn, setDisabledBtn] = useState(false); // We use this variable for letting us know when we pressed the button.

  const animation1 = {
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
  };
  const animation2 = {
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
      delay: 0.7,
    },
  };
  const animation3 = {
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
      delay: 0.9,
    },
  };
  const animation4 = {
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
      delay: 1.1,
    },
  };
  const animation5 = {
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
      delay: 1.3,
    },
  };
  const animation6 = {
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
      delay: 0.3,
    },
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisabledBtn(true);
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        number,
        message,
      });

      toast.success("Message sent. Will contact you shortly!");
      setDisabledBtn(false);
      setName("");
      setEmail("");
      setNumber("");
      setMessage("");
    } catch (error) {
      console.log(error);
      setDisabledBtn(false);
      toast.error("Error Occured");
      setName("");
      setEmail("");
      setNumber("");
      setMessage("");
    }
  };
  return (
    <div id="contact">
      <div className="container1">
        <motion.h1 {...animation6}>Contact Me</motion.h1>
        <form onSubmit={submitHandler}>
          <motion.input
            type="text"
            name="name"
            id="name"
            placeholder="Your Full Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            {...animation1}
          />
          <motion.input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            {...animation2}
          />
          <motion.input
            type="number"
            name="number"
            id="number"
            placeholder="Your Phone Number"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            required
            {...animation3}
          />
          <motion.textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required
            {...animation4}
          ></motion.textarea>
          <motion.button
            type="submit"
            {...animation5}
            disabled={disabledBtn}
            className={disabledBtn ? "disabledbtn" : ""}
          >
            Send Message
          </motion.button>
        </form>
      </div>
      <div className="container2">
        <img src={vg} alt="Vector Graphics" />
      </div>
    </div>
  );
};

export default Contact;
