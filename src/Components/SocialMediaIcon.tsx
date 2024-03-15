import React from "react";

type SocialMediaIconProps = {
  imageSrc: string;
  altText: string;
};

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  imageSrc,
  altText,
}) => {
  return (
    <img
      src={imageSrc}
      alt={altText}
      className="icon bigDesktop:h-10 bigDesktop:w-10 transform transition duration-700 ease-in-out hover:scale-150"
    />
  );
};

export default SocialMediaIcon;
