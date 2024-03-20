import fadeInAnimationVariants from "../../utils/fadeAnimationVariants";
import { motion } from "framer-motion";
import myLinks from "../Navbar/myLinks";

const Footer = () => {
  return (
    <footer className="px-6 py-10 sm:px-16">
      <div className="flex flex-col items-center gap-10 rounded-2xl bg-gradient-to-t from-primary-50 to-gray-50 px-10 py-12">
        <div className="">
          <ul className="nav-links flex flex-col gap-8 text-center text-xl lg:flex lg:flex-row lg:gap-32">
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
        <div className="w-full border-t border-gray-300"></div>
        <p className="text-base font-bold text-gray-700">
          Copyright © 2024 KulievTech. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
