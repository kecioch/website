"use client";

import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

interface Props {
  id: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  label: string;
  error: FieldError | undefined;
  register: UseFormRegisterReturn;
  disabled?: boolean;
}

const FormInput = ({
  id,
  type,
  placeholder,
  label,
  error,
  register,
  disabled
}: Props) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        className={`w-full bg-transparent border-b-[0.1em] p-2 pb-1 focus:border-indigo-700 focus:outline-none placeholder:opacity-0 focus ${
          error ? "border-red-700 text-red-700" : "border-slate-400"
        }`}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
      />
      <label
        htmlFor={id}
        className={`absolute pointer-events-none top-2 left-2 transition-all uppercase ${
          error && "text-red-700"
        }`}
      >
        {label}
      </label>
      {error && <ErrorMessage className="px-2">{error.message}</ErrorMessage>}
    </div>
  );
};

export default FormInput;
