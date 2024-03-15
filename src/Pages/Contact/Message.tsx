import SocialMediaIcon from "../../Components/SocialMediaIcon";
import { mySocials } from "../Hero/Hero";
import emailIcon from "../../assets/Images/email.png";
import phoneIcon from "../../assets/Images/phone.png";

const Message = () => {
  return (
    <div className="flex flex-1 flex-col justify-between rounded-3xl bg-secondary-100 p-8">
      <div className="mb-8 bg-red-300">
        <p className="bigDesktop:text-5xl mb-6 text-left text-xl font-bold leading-7 text-gray-900 sm:text-3xl">
          Say Hello!
        </p>
        <p className="bigDesktop:text-2xl bigDesktop:w-[60%] text-base leading-6 text-gray-600 sm:text-lg laptop:w-[70%]">
          Interested in working together or just have a question? Let&apos;s
          connect and make things happen.
        </p>
      </div>
      <div className="mb-12 flex flex-col gap-10 bg-green-300 xl:mb-0">
        <div>
          <p className="bigDesktop:text-2xl mb-4 text-left text-base font-medium text-gray-900 sm:text-lg">
            Email
          </p>

          <div className="flex items-center gap-4">
            <SocialMediaIcon imageSrc={emailIcon} altText="My Email Icon" />
            <p className="bigDesktop:text-xl cursor-pointer text-left text-sm font-medium text-primary-700">
              kulievdev@gmail.com
            </p>
          </div>
        </div>

        <div>
          <p className="bigDesktop:text-2xl mb-4 text-left text-base font-medium leading-normal text-gray-900 sm:text-lg">
            Phone Number
          </p>
          <div className="flex items-center gap-4">
            <SocialMediaIcon imageSrc={phoneIcon} altText="My Email Icon" />
            <p className="bigDesktop:text-xl cursor-pointer text-left text-sm font-medium text-primary-700">
              646-663-6636
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-8">
        {mySocials.map((mySocial, idx) => {
          return (
            <SocialMediaIcon
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
