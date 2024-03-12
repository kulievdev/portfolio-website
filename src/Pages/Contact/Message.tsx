import SocialMediaIcon from "../../Components/SocialMediaIcon";
import { mySocials } from "../Hero/Hero";
import emailIcon from "../../assets/Images/email.png";
import phoneIcon from "../../assets/Images/phone.png";

const Message = () => {
  return (
    <div className="flex flex-1 flex-col justify-between rounded-3xl bg-secondary-100 px-10 py-8">
      <div>
        <p className="mb-6 text-left text-3xl font-bold leading-7 text-gray-900">
          Say Hello!
        </p>
        <p className="mb-8 text-base leading-6 text-gray-600 sm:mb-0 sm:w-96 ">
          Interested in working together or just have a question? Let&apos;s
          connect and make things happen.
        </p>
      </div>
      <div className="mb-12 flex flex-col gap-10 xl:mb-0">
        <div>
          <p className="mb-4 text-left text-lg font-medium text-gray-900">
            Email
          </p>

          <div className="flex items-center gap-4">
            <SocialMediaIcon imageSrc={emailIcon} altText="My Email Icon" />
            <p className="cursor-pointer text-left text-sm font-medium text-primary-700">
              kuliev.tech@gmail.com
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-left text-lg font-medium leading-normal text-gray-900">
            Phone Number
          </p>
          <div className="flex items-center gap-4">
            <SocialMediaIcon imageSrc={phoneIcon} altText="My Email Icon" />
            <p className="cursor-pointer text-left text-sm font-medium text-primary-700">
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
