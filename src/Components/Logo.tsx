import logo from "../assets/Images/logo.png";

const Logo = () => {
  return (
    <img
      alt="Logo"
      src={logo}
      className="w-20 cursor-pointer largeTablet:w-24"
    />
  );
};

export default Logo;
