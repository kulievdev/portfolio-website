import { lazy } from "react";

const Home = lazy(() => import("./Pages/Home/Home"));
const Projects = lazy(() => import("./Pages/Projects/Projects"));
const TechStack = lazy(() => import("./Pages/TechStack/TechStack"));
const About = lazy(() => import("./Pages/About/About"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Footer = lazy(() => import("./Pages/Footer/Footer"));

function App() {
  return (
    <>
      <Home />
      <Projects />
      <TechStack />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
