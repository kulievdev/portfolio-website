import React from "react";
import downloadIcon from "../assets/Images/download-purple.svg";
import moveIcon from "../assets/Images/move.svg";

type CtaProps = {
  type:
    | "download cv"
    | "my work"
    | "connect"
    | "send message"
    | "project cta"
    | "let's talk";
  projectCtaText?: string;
  ctaLink?: string;
  onClick?: () => void;
};

const openResume = () => {
  window.open("/Tohir Kuliev - Resume.pdf");
};

const Cta: React.FC<CtaProps> = ({ type, projectCtaText, onClick }) => {
  return (
    <>
      {(() => {
        switch (type) {
          case "download cv":
            return (
              <button
                onClick={openResume}
                className="cursor-pointer rounded-lg border-2 border-secondary-300 p-2 text-center text-base font-bold leading-loose tracking-wider text-primary-900 transition-colors duration-300 ease-out hover:border-primary-600 hover:bg-white hover:text-primary-700 tablet:text-lg desktop:text-xl"
              >
                <img
                  src={downloadIcon}
                  alt="download icon"
                  className="h-7 w-7"
                />
              </button>
            );
          case "my work":
            return (
              <a
                href="#projects"
                aria-label="Navigate to projects"
                className="flex cursor-pointer items-center gap-2 rounded-xl border-2 border-secondary-300 px-3 py-2 text-center text-base font-bold leading-loose tracking-wider text-primary-700 transition-colors duration-300 ease-out hover:border-primary-600 hover:bg-white largeTablet:px-5 largeTablet:py-2.5 largeTablet:text-lg desktop:px-7 desktop:py-[18px] desktop:text-xl"
              >
                My Work
                <img src={moveIcon} alt="Move down icon" className="h-6 w-6" />
              </a>
            );
          case "let's talk":
            return (
              <button
                onClick={onClick}
                className="largeTable:px-5 flex cursor-pointer items-center gap-2 rounded-xl bg-primary-600 px-3 py-2.5 text-center text-base font-bold leading-loose tracking-wider text-gray-50 transition-colors duration-300 ease-out hover:bg-primary-700 largeTablet:py-3 largeTablet:text-lg desktop:px-7 desktop:py-5 desktop:text-xl"
              >
                Let's Talk!
              </button>
            );
          case "project cta":
            return (
              <button
                onClick={onClick}
                className="w-[8rem] rounded-xl  border-2 border-gray-300 px-6 py-2 text-sm font-semibold text-gray-700 transition-colors duration-300 ease-linear hover:border-gray-700 hover:bg-gray-700 hover:text-white desktop:w-[10rem] desktop:text-lg "
              >
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
