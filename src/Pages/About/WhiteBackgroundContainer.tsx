import React from "react";

interface WhiteBackgroundContainerProps {
  children: React.ReactNode;
}

const WhiteBackgroundContainer: React.FC<WhiteBackgroundContainerProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-col justify-center gap-6 rounded-3xl bg-white p-4 px-6 shadow-2xl sm:px-14 sm:py-16 lg:px-12 lg:py-20 laptop:px-32 desktop:gap-10 desktop:px-44 bigDesktop:px-52">
      {children}
    </div>
  );
};

export default WhiteBackgroundContainer;
