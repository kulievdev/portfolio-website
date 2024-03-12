import React from "react";

type InputProps = {
  type: "input" | "textarea";
  placeholder?: string;
  labelText: string;
};

const Input: React.FC<InputProps> = ({ type, placeholder, labelText }) => {
  return (
    <div className="flex w-full flex-col gap-1.5 desktop:w-[80%]">
      {type === "textarea" ? (
        <>
          <label className="cursor-pointer text-sm font-semibold text-gray-600 ">
            {labelText}
          </label>
          <textarea
            className="flex h-32 w-full resize-none rounded-xl border border-secondary-200 bg-white px-3.5 py-2.5 text-sm text-gray-800 shadow transition-all duration-300 ease-out placeholder:text-gray-500 focus:border-secondary-400 focus:shadow-secondary-400/80 focus:outline-none"
            placeholder={placeholder}
          ></textarea>
        </>
      ) : (
        <>
          <label className="cursor-pointer text-sm font-semibold text-gray-600">
            {labelText}
          </label>
          <input
            className="rounded-xl border border-secondary-200 bg-white px-3.5 py-2.5 text-sm text-gray-800 shadow transition-all duration-300 ease-out placeholder:text-gray-500 focus:border-secondary-400 focus:shadow-secondary-400/80 focus:outline-none"
            type="text"
            placeholder={placeholder}
          />
        </>
      )}
    </div>
  );
};

export default Input;
