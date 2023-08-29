import Header, { MiniHeader } from "./Components/Header";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Skills from "./Components/Skills";
import Education from "./Components/Education.jsx";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer.jsx";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

function App() {
  // We are making one variable to know when we have to open our menu.
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  return (
    <div className="App">
      <MiniHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
