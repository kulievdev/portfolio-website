import Navbar from "./Pages/Navbar/Navbar";
import Hero from "./Pages/Hero/Hero";
import TechStack from "./Pages/TechStack/TechStack";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import Projects from "./Pages/Projects/Projects";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const cb = () => {
      document.body.style.visibility = "visible";
    };

    if (
      document.readyState === "interactive" ||
      document.readyState === "complete"
    ) {
      cb();
    } else {
      document.addEventListener("DOMContentLoaded", cb);
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", cb);
    };
  }, []);

  return (
    <>
      <main id="home" className="bg-gradient-to-t from-primary-50  to-gray-50 ">
        <Navbar />
        <Hero />
      </main>
      <Projects />
      <TechStack />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
