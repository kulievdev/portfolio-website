type SocialMediaContactIconProps = {
  type: "socialMedia";
  imageSrc: string;
  altText: string;
  socialLink: string;
};

type ContactInfoIconProps = {
  type: "contactInfo";
  imageSrc: string;
  altText: string;
  contactLink: string;
};

type ContactIconProps = SocialMediaContactIconProps | ContactInfoIconProps;

const ContactIcon: React.FC<ContactIconProps> = (props) => {
  const navigateToLink = () => {
    if (props.type === "socialMedia" && props.socialLink) {
      window.open(props.socialLink);
    }
  };

  return (
    <>
      {props.type === "socialMedia" ? (
        <img
          onClick={navigateToLink}
          src={props.imageSrc}
          alt={props.altText}
          className="icon transform transition duration-700 ease-in-out hover:scale-150 bigDesktop:h-10 bigDesktop:w-10"
        />
      ) : (
        <a href={props.contactLink} aria-label="Contact Me">
          <img
            src={props.imageSrc}
            alt={props.altText}
            className="icon transform transition duration-700 ease-in-out hover:scale-150 bigDesktop:h-10 bigDesktop:w-10"
          />
        </a>
      )}
    </>
  );
};

export default ContactIcon;
