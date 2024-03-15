import { useState } from "react";
import { Flex, Button, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Cta from "../../Components/Cta";
import Logo from "../../Components/Logo";

export const myLinks = [
  {
    link: "#home",
    text: "Home",
  },
  {
    link: "#projects",
    text: "Projects",
  },
  {
    link: "#skills",
    text: "Skills",
  },
  {
    link: "#about",
    text: "About",
  },

  {
    link: "#contact",
    text: "Contact",
  },
];
const Navbar = () => {
  const [display, changeDisplay] = useState("none");
  return (
    <>
      {/* Desktop */}
      <Flex
        direction="column"
        display={["none", "none", "none", "none", "flex", "flex"]}
      >
        <div className="mx-10 my-0 lg:mx-14 desktop:mx-40 ">
          <nav className="flex items-center justify-between py-6">
            <Logo />
            <div>
              <ul className="nav-links flex gap-8 text-xl">
                {myLinks.map((myLink, idx) => {
                  return (
                    <li key={idx}>
                      <a className="hover:nav_links" href={myLink.link}>
                        {myLink.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Cta type="connect" />
          </nav>
        </div>
      </Flex>

      <div className="mx-6 pt-3 sm:mx-10 sm:py-6 lg:px-14 laptop:hidden">
        <Flex
          display={["flex", "flex", "flex", "flex", "none", "none"]}
          align="center"
          justify="space-between"
        >
          <Logo />
          <IconButton
            aria-label="Open Menu"
            size="lg"
            icon={<HamburgerIcon />}
            onClick={() => changeDisplay("flex")}
          />
        </Flex>
      </div>
      {/* Mobile */}
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={6}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          {myLinks.map((myLink, idx) => {
            return (
              <li key={idx}>
                <Button
                  as="a"
                  onClick={() => changeDisplay("none")}
                  href={myLink.link}
                  variant="ghost"
                  aria-label={myLink.text}
                  my={5}
                  w="100%"
                >
                  {myLink.text}
                </Button>
              </li>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
