import { Typewriter } from "react-simple-typewriter";
import MainHeading from "../../Components/MainHeading";
import MiniMainHeading from "../../Components/MiniMainHeading";

const ContactHeader = () => {
  return (
    <>
      <MiniMainHeading text="Ge in Touch" />
      <MainHeading
        text={
          <Typewriter
            words={["Contact Me", "Let's Connect!"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={30}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        }
      />
    </>
  );
};

export default ContactHeader;
