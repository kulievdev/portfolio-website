import AboutMe from "./AboutMe";
import aboutMeInfo from "./aboutMeInfo";

const AboutBody = () => {
  return (
    <>
      <h2 className="text-lg font-bold md:text-xl desktop:text-2xl">
        Quick Summary!
      </h2>
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-6 desktop:gap-10">
        {aboutMeInfo.map((myInfo, idx) => {
          return (
            <AboutMe
              key={idx}
              title={myInfo.title}
              text={myInfo.text}
              backgroundColor={myInfo.backgroundColor}
              imgSrc={myInfo.imgSrc}
            />
          );
        })}
      </div>
    </>
  );
};

export default AboutBody;
