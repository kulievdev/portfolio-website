import Navbar from "./Pages/Navbar/Navbar";
import Hero from "./Pages/Hero/Hero";
import TechStack from "./Pages/TechStack/TechStack";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

function App() {
    return (
        <main>
            <main className="bg-gradient-to-tl from-primary-50 to-gray-50">
                <Navbar />
                <Hero />
            </main>
            <About />
            <TechStack />
            <Contact />
        </main>
    );
}

export default App;
