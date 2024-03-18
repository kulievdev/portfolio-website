import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type InputProps = {
  type: "text" | "email" | "password" | "tel" | "textarea";
  placeholder?: string;
  labelText: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  name: string;
  validationSchema: object;
};

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  labelText,
  register,
  errors,
  name,
  validationSchema,
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="cursor-pointer text-sm font-semibold text-gray-600 bigDesktop:text-xl">
        {labelText}
      </label>

      {(() => {
        switch (type) {
          case "textarea":
            return (
              <textarea
                {...register(name, validationSchema)}
                className="flex h-32 resize-none rounded-xl border border-secondary-200 bg-white px-3.5 py-2.5 text-sm text-gray-800 shadow transition-all duration-300 ease-out placeholder:text-gray-500 focus:border-secondary-400 focus:shadow-secondary-400/80 focus:outline-none bigDesktop:text-lg"
                placeholder={placeholder}
              ></textarea>
            );
          default:
            return (
              <input
                {...register(name, validationSchema)}
                className="rounded-xl border border-secondary-200 bg-white px-3.5 py-2.5 text-sm text-gray-800 shadow transition-all duration-300 ease-out placeholder:text-gray-500 focus:border-secondary-400 focus:shadow-secondary-400/80 focus:outline-none bigDesktop:text-lg"
                type={type}
                placeholder={placeholder}
              />
            );
        }
      })()}
      {errors[name] && (
        <p className=" text-red-500">{`${errors[name]!.message}`}</p>
      )}
    </div>
  );
};

export default Input;
