import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <div id="header">
        <NavContent setMenuOpen={setMenuOpen} />
      </div>

      {/*
      
      This is basically for the menu in phones etc. Now we will make another component and in that we will have the NavComponent. So we have to export the NavComponent. But here we are getting one problem that is when the menubar opens, we cannot se the button again to close it. Even if we increase the z-index of the button and mark it as important, then also it will not work becuase the z-index of the header is itself less. So we will keep this out of header.
      
      */}
      <button
        className="navBtn"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const MiniHeader = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={menuOpen ? `navPhone navComes` : `navPhone`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => {
  return (
    <nav className="navbar">
      <div className="name">
        <h1>Arnab</h1>
      </div>

      <div className="links">
        <a
          onClick={() => {
            setMenuOpen(false);
          }}
          href="#home"
        >
          Home
        </a>
        <a
          onClick={() => {
            setMenuOpen(false);
          }}
          href="#work"
        >
          Work
        </a>
        <a
          onClick={() => {
            setMenuOpen(false);
          }}
          href="#skills"
        >
          Skills
        </a>
        <a
          onClick={() => {
            setMenuOpen(false);
          }}
          href="#education"
        >
          Education
        </a>
        <a
          onClick={() => {
            setMenuOpen(false);
          }}
          href="#contact"
        >
          Contact
        </a>
      </div>

      <div className="mail">
        <a href="mailto:sarkararnab266@gmail.com">
          <button>Email</button>
        </a>
      </div>
    </nav>
  );
};

export default Header;
