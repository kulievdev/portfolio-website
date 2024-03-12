import arrow from "../assets/Images/arrow.png";

const ArrowIcon = () => {
  return (
    <img
      src={arrow}
      alt="Arrow icon"
      className="laptop:icon hidden laptop:absolute laptop:bottom-10 laptop:right-[-5rem]"
    />
  );
};

export default ArrowIcon;
