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
          I am a Web Producer / Developer from New York City, specializing in
          maintaining and building websites.
        </p>
        <p className="text-base md:text-lg laptop:text-xl">
          I use my CMS, coding and programming skills to create user-friendly
          and responsive web pages. I have gained web development experience
          from building many complex projects.
        </p>
      </div>
    </>
  );
};

export default AboutHeader;
