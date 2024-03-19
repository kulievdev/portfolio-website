import ContactIcon from "../../Components/ContactIcon";
import { mySocials } from "../Hero/Hero";
import emailIcon from "../../assets/SocialMediaIcons/email.svg";
import phoneIcon from "../../assets/SocialMediaIcons/phone.svg";

const Message = () => {
  return (
    <div className="flex flex-1 flex-col justify-between rounded-3xl bg-secondary-100 p-8">
      <div className="mb-8">
        <p className="mb-6 text-left text-xl font-bold leading-7 text-gray-900 sm:text-3xl bigDesktop:text-5xl">
          Say Hello!
        </p>
        <p className="text-base leading-6 text-gray-600 sm:text-lg laptop:w-[70%] bigDesktop:w-[60%] bigDesktop:text-2xl">
          Interested in working together or just have a question? Let&apos;s
          connect and make things happen.
        </p>
      </div>
      <div className="mb-12 flex flex-col gap-10 xl:mb-0">
        <div>
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
              href="mailto:kulievdev@gmail.com"
              className="cursor-pointer text-left text-sm font-medium text-primary-700 bigDesktop:text-xl"
            >
              kulievdev@gmail.com
            </a>
          </div>
        </div>

        <div>
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
              className="cursor-pointer text-left text-sm font-medium text-primary-700 bigDesktop:text-xl"
            >
              646-663-6636
            </a>
          </div>
        </div>
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
    </div>
  );
};

export default Message;
