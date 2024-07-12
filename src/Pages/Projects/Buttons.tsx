import React, { useState } from "react";
import myProjects from "./myProjects";

interface ButtonsProps {
  projectItems: string[];
  filterItems: (category: string) => void;
  setItems: React.Dispatch<React.SetStateAction<typeof myProjects>>;
}

const Buttons: React.FC<ButtonsProps> = ({
  projectItems,
  filterItems,
  setItems,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (category: string, index: number) => {
    filterItems(category);
    setActiveIndex(index);
  };

  const handleAllClick = () => {
    setItems(myProjects);
    setActiveIndex(null);
  };

  return (
    <div className="mb-4 flex justify-center gap-10">
      <button
        onClick={handleAllClick}
        className={`cursor-pointer rounded-xl px-3 py-2.5 text-center text-base font-bold leading-loose tracking-wider transition-colors duration-300 ease-out tablet:px-5 tablet:py-3 tablet:text-lg desktop:px-7 desktop:py-5 desktop:text-xl ${
          activeIndex === null
            ? "bg-primary-600 text-gray-50"
            : "bg-gray-100 text-primary-700 hover:bg-primary-600 hover:text-gray-50"
        }`}
      >
        All
      </button>
      {projectItems.map((val, idx) => (
        <button
          key={idx}
          onClick={() => handleClick(val, idx)}
          className={`cursor-pointer rounded-xl px-3 py-2.5 text-center text-base font-bold leading-loose tracking-wider transition-colors duration-300 ease-out tablet:px-5 tablet:py-3 tablet:text-lg desktop:px-7 desktop:py-5 desktop:text-xl ${
            activeIndex === idx
              ? "bg-primary-600 text-gray-50"
              : "bg-gray-100 text-primary-700 hover:bg-primary-600 hover:text-gray-50"
          }`}
        >
          {val}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
