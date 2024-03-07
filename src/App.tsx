import Navbar from "./Pages/Navbar/Navbar";
import Hero from "./Pages/Hero/Hero";
import TechStack from "./Pages/TechStack/TechStack";
// import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import Projects from "./Pages/Projects/Projects";

function App() {
    return (
        <main className="">
            <main className="bg-gradient-to-tl from-primary-50 to-gray-50">
                <Navbar />
                <Hero />
            </main>
            <Projects />
            <TechStack />
            {/* <About /> */}
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
