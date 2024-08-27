import React from "react";
import downloadIcon from "../assets/Images/download-purple.svg";

type CtaProps = {
  type: "download cv" | "my work" | "connect" | "send message" | "project cta";
  projectCtaText?: string;
  ctaLink?: string;
  onClick?: () => void;
};

const openResume = () => {
  window.open("/TohirKuliev_Resume.pdf");
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
                className="flex cursor-pointer items-center gap-2 rounded-xl bg-primary-700 px-3 py-2.5 text-center text-base font-bold leading-loose tracking-wider text-gray-50 transition-colors duration-300 ease-out hover:bg-primary-600 tablet:px-5 tablet:py-3 tablet:text-lg desktop:px-7 desktop:py-5 desktop:text-xl"
              >
                Download CV
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
                className="flex cursor-pointer items-center gap-2 rounded-xl border-2 border-secondary-300 px-3 py-2 text-center text-base font-bold leading-loose tracking-wider text-primary-900 transition-colors duration-300 ease-out hover:border-primary-600 hover:bg-white hover:text-primary-700 tablet:px-5 tablet:py-2.5 tablet:text-lg desktop:px-7 desktop:py-[18px] desktop:text-xl"
              >
                My Work
              </a>
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
