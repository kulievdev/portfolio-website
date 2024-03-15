import arrow from "../assets/Images/arrow.png";

const ArrowIcon = () => {
  return (
    <img
      src={arrow}
      alt="Arrow icon"
      className="icon bottom-5 hidden laptop:absolute laptop:right-[0.7rem] laptop:inline-block desktop:bottom-10 desktop:right-[2rem]"
    />
  );
};

export default ArrowIcon;
