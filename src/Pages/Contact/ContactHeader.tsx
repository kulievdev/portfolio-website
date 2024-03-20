import MainHeading from "../../Components/MainHeading";
import MiniMainHeading from "../../Components/MiniMainHeading";
import Typewriter from "typewriter-effect";

const ContactHeader = () => {
  return (
    <>
      <MiniMainHeading text="Ge in Touch" />
      <MainHeading
        text={
          <Typewriter
            options={{
              strings: ["Contact Me", "Let's Connect!"],
              autoStart: true,
              loop: true,
            }}
          />
        }
      />
    </>
  );
};

export default ContactHeader;
