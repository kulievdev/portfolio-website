import Cta from "../../Components/Cta";

const HeroContent = () => {
  return (
    <div
      className="inline-flex max-w-[600px] flex-col items-start justify-center gap-6 pt-6 sm:pt-4 desktop:gap-16 desktop:pt-0"
      role="banner"
    >
      <header className="flex flex-col items-start justify-start gap-4 desktop:gap-12">
        <p className="text-center text-4xl font-bold leading-10 sm:text-5xl sm:font-extrabold sm:leading-[68px] desktop:text-start desktop:text-7xl desktop:leading-[84px]">
          Hello, I'm Tohir a{" "}
          <span className="bg-gradient-to-r from-primary-700 to-secondary-500 bg-clip-text text-transparent ">
            Full Stack Web
          </span>{" "}
          <span className="bg-gradient-to-r from-primary-700 to-secondary-500 bg-clip-text text-transparent ">
            Developer.
          </span>{" "}
        </p>
        <p className="text-center text-lg font-medium leading-normal text-gray-600 sm:text-xl desktop:text-start desktop:leading-7">
          Presenting unique and creative software solutions for a variety of
          challenges and needs.
        </p>
      </header>
      <nav className="inline-flex w-full items-start justify-center space-x-4 desktop:justify-start desktop:space-x-8">
        <Cta type="download cv" />
        <Cta type="my work" />
      </nav>
    </div>
  );
};

export default HeroContent;
