import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <main id="home" className="bg-gradient-to-t from-primary-50 to-gray-50">
      <Navbar />
      <Hero />
    </main>
  );
};

export default Home;
