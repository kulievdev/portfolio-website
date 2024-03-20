import MainHeading from "../../Components/MainHeading";
import MiniMainHeading from "../../Components/MiniMainHeading";
import AnimateOnScroll from "../../animation/AnimateOnScroll";
import Form from "./Form";
import Message from "./Message";

import Typewriter from "typewriter-effect";

const Contact = () => {
  return (
    <AnimateOnScroll noScale y={40} duration={0.8} threshold={0.1}>
      <section
        id="contact"
        className="bg-gradient-to-b from-primary-50 to-gray-50"
      >
        <div className="section_container flex h-fit flex-col justify-center py-20">
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
          <div className="mx-6 flex flex-row flex-wrap gap-10 sm:mx-10 lg:mx-14 desktop:mx-40">
            <Message />
            <Form />
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
};

export default Contact;
