import Form from "./Form";
import Message from "./Message";

import Typewriter from "typewriter-effect";

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-gray-50">
      <div className="section_container xs:h-[180vh] xs:mx-6 relative mx-4 flex h-[260vh] flex-col justify-center sm:mx-10 md:mx-28 md:h-[160vh] lg:mx-40 lg:h-[160vh] laptop:mx-40 laptop:h-[100vh] xl:mx-72 xl:h-[140vh] desktop:h-[100vh]">
        <p className="mb-6 text-center font-semibold">Get in Touch</p>
        <h1 className="mb-16 text-center text-5xl font-extrabold">
          <Typewriter
            options={{
              strings: ["Contact Me"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="flex flex-col gap-10 laptop:flex-row">
          <Message />
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
