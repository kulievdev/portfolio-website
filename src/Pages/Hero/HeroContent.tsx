import Cta from "../../Components/Cta";
import { motion } from "framer-motion";
import ContactModal from "../../Components/ContactModal";
import { Typewriter } from "react-simple-typewriter";

const HeroContent = () => {
  return (
    <div
      className="inline-flex flex-col items-start justify-center gap-6 pt-6 sm:pt-4 desktop:gap-16 desktop:pt-0"
      role="banner"
    >
      <motion.header
        className="flex flex-col gap-4 text-center largeTablet:text-start"
        initial={{ opacity: 0, y: 40, scale: 0.9, x: "-10%" }}
        animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* <p className="text-center text-4xl font-bold leading-10 sm:text-5xl sm:font-extrabold sm:leading-[68px] largeTablet:text-start desktop:text-7xl desktop:leading-[84px]">
          Hello, I'm Tohir, a{" "}
          <span className="bg-gradient-to-r from-primary-500 to-secondary-700 bg-clip-text text-transparent ">
            Web
          </span>{" "}
          <span className="bg-gradient-to-r from-secondary-700 to-primary-500 bg-clip-text text-transparent">
            Content Specialist.
          </span>{" "}
        </p> */}
        <p className="text-2xl font-bold sm:font-extrabold">Hey There!</p>
        <p className="text-4xl font-bold sm:text-5xl sm:font-extrabold  desktop:text-7xl ">
          I am Tohir a
        </p>
        <p className="bg-gradient-to-r from-primary-500 to-secondary-700 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl sm:font-extrabold desktop:text-7xl ">
          <Typewriter
            words={[
              "Web Developer",
              "Email Developer",
              "Shopify Developer",
              "WordPress Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={30}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </p>
        <p className="max-w-[600px] text-lg font-medium text-gray-600 sm:text-xl ">
          Presenting unique and creative web solutions for a variety of
          challenges and needs.
        </p>
      </motion.header>
      <motion.nav
        className="inline-flex w-full items-start items-center justify-center space-x-4 largeTablet:justify-start desktop:space-x-8"
        initial={{ opacity: 0, y: 40, scale: 0.9, x: "-10%" }}
        animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ContactModal />
        <Cta type="my work" />
      </motion.nav>
    </div>
  );
};

export default HeroContent;
