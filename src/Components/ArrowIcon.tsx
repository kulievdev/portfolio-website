import arrow from "../assets/Images/arrow.png";

const ArrowIcon = () => {
  return (
    <img
      src={arrow}
      alt="Arrow icon"
      className="icon hidden laptop:absolute laptop:bottom-10 laptop:right-[2rem] laptop:inline-block"
    />
  );
};

export default ArrowIcon;
