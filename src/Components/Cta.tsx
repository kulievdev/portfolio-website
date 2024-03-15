import React from "react";

type CtaProps = {
  type: "download cv" | "my work" | "connect" | "send message" | "project cta";
  projectCtaText?: string;
};

const openResume = () => {
  window.open("src/assets/TohirKuliev_Resume.pdf");
};

const Cta: React.FC<CtaProps> = ({ type, projectCtaText }) => {
  return (
    <>
      {(() => {
        switch (type) {
          case "download cv":
            return (
              <button
                onClick={openResume}
                className="cursor-pointer rounded-xl bg-primary-700 px-3 py-2.5 text-center text-base font-bold leading-loose tracking-wider text-gray-50 transition-colors duration-300 ease-out hover:bg-primary-600 tablet:px-5 tablet:py-3 tablet:text-lg desktop:px-7 desktop:py-5 desktop:text-xl"
              >
                Download CV
              </button>
            );
          case "my work":
            return (
              <a
                href="#projects"
                className="cursor-pointer rounded-xl border-2 border-secondary-300 px-3 py-2 text-center text-base font-bold leading-loose tracking-wider text-primary-900 transition-colors duration-300 ease-out hover:border-primary-600 hover:text-primary-700 tablet:px-5  tablet:py-2.5 tablet:text-lg desktop:px-7 desktop:py-[18px] desktop:text-xl"
              >
                My Work
              </a>
            );
          case "connect":
            return (
              <a
                href="#contact"
                className="cursor-pointer rounded-xl border-2 border-secondary-300 px-6 py-2 text-center text-base font-bold leading-loose tracking-wider text-primary-900 transition-colors duration-300 ease-out hover:border-primary-600 hover:text-primary-700 tablet:px-5 tablet:py-2.5 tablet:text-lg desktop:text-xl"
              >
                Connect
              </a>
            );
          case "send message":
            return (
              <button
                className="flex-1 rounded-xl border border-primary-600 bg-primary-600 px-4 py-2.5 text-base font-bold text-gray-50 shadow transition-all duration-300 ease-out hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 bigDesktop:text-xl"
                type="submit"
              >
                Send Message
              </button>
            );
          case "project cta":
            return (
              <button className="w-[8rem] rounded-xl border-2 border-secondary-300 px-6 py-2 text-sm font-semibold hover:border-gray-700 hover:bg-gray-700 hover:text-white desktop:text-lg ">
                {projectCtaText}
              </button>
            );
          default:
            return null;
        }
      })()}
    </>
  );
};

export default Cta;
