import ContactIcon from "../../Components/ContactIcon";
import emailIcon from "../../assets/SocialMediaIcons/email.svg";
import phoneIcon from "../../assets/SocialMediaIcons/phone.svg";
import AnimateOnScroll from "../../animation/AnimateOnScroll";
import mySocials from "../../utils/socials";

const Message = () => {
  return (
    <AnimateOnScroll
      scale={0.7}
      duration={0.6}
      delay={0.2}
      x={window.innerWidth < 1920 ? "-10%" : "-20%"}
      className="flex flex-1 flex-col gap-16 rounded-3xl bg-secondary-100 p-8 sm:justify-between sm:gap-0"
    >
      <div>
        <p className="mb-6 text-left text-xl font-bold leading-7 text-gray-900 sm:text-3xl bigDesktop:text-5xl">
          Say Hello!
        </p>
        <p className="text-base leading-6 text-gray-600 sm:text-lg laptop:w-[70%] bigDesktop:w-[60%] bigDesktop:text-2xl">
          Interested in working together or just have a question? Let&apos;s
          connect and make things happen.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="w-max">
          <p className="mb-4 text-left text-base font-medium text-gray-900 sm:text-lg bigDesktop:text-2xl">
            Email
          </p>

          <div className="flex items-center gap-4">
            <ContactIcon
              contactLink="mailto:kulievdev@gmail.com"
              type="contactInfo"
              imageSrc={emailIcon}
              altText="My Email Icon"
            />
            <a
              aria-label="Email me"
              href="mailto:kulievdev@gmail.com"
              className="cursor-pointer text-left text-sm font-medium text-primary-700 bigDesktop:text-xl"
            >
              kulievdev@gmail.com
            </a>
          </div>
        </div>
        {/* <div className="w-max">
          <p className="mb-4 text-left text-base font-medium leading-normal text-gray-900 sm:text-lg bigDesktop:text-2xl">
            Phone Number
          </p>
          <div className="flex items-center gap-4">
            <ContactIcon
              type="contactInfo"
              contactLink="tel:6466636636"
              imageSrc={phoneIcon}
              altText="My Email Icon"
            />
            <a
              href="tel:6466636636"
              aria-label="Call me"
              className="cursor-pointer text-left text-sm font-medium text-primary-700 bigDesktop:text-xl"
            >
              646-663-6636
            </a>
          </div>
        </div> */}
      </div>
      <div className="flex justify-center gap-8">
        {mySocials.map((mySocial, idx) => {
          return (
            <ContactIcon
              type="socialMedia"
              socialLink={mySocial.link}
              key={idx}
              imageSrc={mySocial.src}
              altText={mySocial.alt}
            />
          );
        })}
      </div>
    </AnimateOnScroll>
  );
};

export default Message;
