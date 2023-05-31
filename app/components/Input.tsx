"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative p-2">
      <input
        id={id}
        {...register(id, { required })}
        placeholder={label}
        type={type}
        autoComplete="off"
        className="w-full bg-transparent text-white outline-none placeholder:text-customLightGrey/30 py-2 px-2 border-b-[2px]       border-b-customLightGrey/40 focus:border-b-white transition"
      />
    </div>
  );
};

export default Input;
