import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton } from "@chakra-ui/react";
import myLinks from "./myLinks";
import Logo from "../../Components/Logo";
import { useState } from "react";
import Cta from "../../Components/Cta";

const MobileNavbar = () => {
  const [display, changeDisplay] = useState("none");

  return (
    <>
      <div className="mx-6 pt-3 sm:mx-10 sm:py-6 lg:mx-28 laptop:hidden">
        <Flex
          display={["flex", "flex", "flex", "none", "none", "none"]}
          align="center"
          justify="space-between"
        >
          <Logo />
          <div className="flex items-center gap-6">
            {window.innerWidth > 600 ? <Cta type="download cv" /> : null}
            <IconButton
              aria-label="Open Menu"
              size="lg"
              icon={<HamburgerIcon />}
              onClick={() => changeDisplay("flex")}
            />
          </div>
        </Flex>
      </div>
      <div className="laptop:hidden">
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
          <div className="mx-10 flex justify-end pt-3 sm:mx-14 sm:py-6 lg:px-14">
            <IconButton
              aria-label="Open Menu"
              size="lg"
              icon={<CloseIcon />}
              onClick={() => changeDisplay("none")}
            />
          </div>

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
            {window.innerWidth < 600 ? <Cta type="download cv" /> : null}
          </Flex>
        </Flex>
      </div>
    </>
  );
};

export default MobileNavbar;
