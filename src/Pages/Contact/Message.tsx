import SocialMediaIcon from "../../Components/SocialMediaIcon";
import { mySocials } from "../Hero/Hero";
import emailIcon from "../../assets/Images/email.png";
import phoneIcon from "../../assets/Images/phone.png";

const Message = () => {
    return (
        <div className="flex flex-col flex-1 justify-between rounded-3xl bg-secondary-100 px-10 py-8">
            <div>
                <p className="text-left text-3xl font-bold mb-6 leading-7 text-gray-900">
                    Say Hello!
                </p>
                <p className="w-96 text-base leading-6 text-gray-600 ">
                    Interested in working together or just have a question?
                    Let&apos;s connect and make things happen.
                </p>
            </div>
            <div className="flex flex-col gap-10">
                <div>
                    <p className="text-left text-lg font-medium text-gray-900 mb-4">
                        Email
                    </p>

                    <div className="flex items-center gap-4">
                        <SocialMediaIcon
                            imageSrc={emailIcon}
                            altText="My Email Icon"
                        />
                        <p className="text-left text-sm font-medium text-primary-700 cursor-pointer">
                            kuliev.tech@gmail.com
                        </p>
                    </div>
                </div>

                <div>
                    <p className="text-left text-lg font-medium leading-normal text-gray-900 mb-4">
                        Phone Number
                    </p>
                    <div className="flex items-center gap-4">
                        <SocialMediaIcon
                            imageSrc={phoneIcon}
                            altText="My Email Icon"
                        />
                        <p className="text-left text-sm font-medium text-primary-700 cursor-pointer">
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
