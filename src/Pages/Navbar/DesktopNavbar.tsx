import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Logo from "../../Components/Logo";
import myLinks from "./myLinks";
import fadeInAnimationVariants from "../../utils/fadeAnimationVariants";
import Cta from "../../Components/Cta";

const DesktopNavbar = () => {
  return (
    <Flex
      direction="column"
      display={["none", "none", "none", "flex", "flex", "flex"]}
    >
      <motion.div
        className="mx-6 my-0 sm:mx-10 lg:mx-28 desktop:mx-60"
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="flex items-center justify-between py-6">
          <Logo />
          <div>
            <ul className="nav-links flex gap-8 text-xl">
              {myLinks.map((myLink, idx) => {
                return (
                  <motion.li
                    key={idx}
                    variants={fadeInAnimationVariants(0.1, 30)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={idx}
                  >
                    <a
                      aria-current="page"
                      className="hover:nav_links"
                      href={myLink.link}
                    >
                      {myLink.text}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </div>
          <Cta type="download cv" />
        </nav>
      </motion.div>
    </Flex>
  );
};

export default DesktopNavbar;
