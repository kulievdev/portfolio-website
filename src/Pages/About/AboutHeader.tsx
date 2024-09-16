const AboutHeader = () => {
  return (
    <>
      <div className="flex items-center gap-8">
        <h2 className="text-2xl font-extrabold sm:text-3xl desktop:text-5xl">
          About
        </h2>
        <div className="h-[5px] w-24 rounded-full border bg-blue-500 sm:h-2 sm:w-80 "></div>
      </div>
      <div className="flex flex-col gap-6 lg:w-[80%]">
        <p className="text-base md:text-lg laptop:text-xl">
          I am a Web and Email Developer from New York City, specializing in
          creating responsive websites and effective email campaigns.
        </p>
        <p className="text-base md:text-lg laptop:text-xl">
          I use my coding, design, and platform expertise to build user-friendly
          web pages and high-converting email templates. My experience comes
          from developing complex projects across various platforms.
        </p>
      </div>
    </>
  );
};

export default AboutHeader;
