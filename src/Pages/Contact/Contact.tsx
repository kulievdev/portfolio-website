import Form from "./Form";
import Message from "./Message";

import Typewriter from "typewriter-effect";

const Contact = () => {
    return (
        <section className="bg-gradient-to-b from-primary-50 to-gray-50">
            <div className="section_container relative flex flex-col justify-center">
                <p className="text-center mb-6 font-semibold">Get in Touch</p>
                <h1 className="text-5xl text-center font-extrabold mb-16">
                    <Typewriter
                        options={{
                            strings: ["Contact Me"],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </h1>
                <div className="flex gap-10">
                    <Message />
                    <Form />
                </div>
            </div>
        </section>
    );
};

export default Contact;
