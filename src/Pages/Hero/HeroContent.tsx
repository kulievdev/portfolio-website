import Cta from "../../Components/Cta";
import { motion } from "framer-motion";
import ContactModal from "../../Components/ContactModal";

const HeroContent = () => {
  return (
    <div
      className="inline-flex max-w-[600px] flex-col items-start justify-center gap-6 pt-6 sm:pt-4 desktop:gap-16 desktop:pt-0"
      role="banner"
    >
      <motion.header
        className="flex flex-col items-start justify-start gap-4 desktop:gap-12"
        initial={{ opacity: 0, y: 40, scale: 0.9, x: "-10%" }}
        animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-4xl font-bold leading-10 sm:text-5xl sm:font-extrabold sm:leading-[68px] tablet:text-start desktop:text-7xl desktop:leading-[84px]">
          Hello, I'm Tohir, a{" "}
          <span className="bg-gradient-to-r from-primary-500 to-secondary-700 bg-clip-text text-transparent ">
            Web
          </span>{" "}
          <span className="bg-gradient-to-r from-secondary-700 to-primary-500 bg-clip-text text-transparent">
            Content Specialist.
          </span>{" "}
        </p>
        <p className="text-center text-lg font-medium leading-normal text-gray-600 sm:text-xl tablet:text-start desktop:leading-7">
          Presenting unique and creative web solutions for a variety of
          challenges and needs.
        </p>
      </motion.header>
      <motion.nav
        className="inline-flex w-full items-start items-center justify-center space-x-4 tablet:justify-start desktop:space-x-8"
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
