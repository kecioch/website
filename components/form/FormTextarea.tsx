"use client";

import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

interface Props {
  id: string;
  placeholder: string;
  label: string;
  error: FieldError | undefined;
  register: UseFormRegisterReturn;
}

const FormTextarea = ({ id, label, placeholder, error, register }: Props) => {
  return (
    <div className="flex flex-col gap-1 mb-1">
      <label
        htmlFor={id}
        className={`uppercase px-2 transition-all  ${error && "text-red-700"}`}
      >
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        className={`py-1 px-2 min-h-32 bg-transparent border-[0.1em] rounded-md focus:border-indigo-700 focus:outline-none ${
          error ? "border-red-700 text-red-700" : "border-slate-400 "
        }`}
        {...register}
      />
      {error && <ErrorMessage className="px-2">{error.message}</ErrorMessage>}
    </div>
  );
};

export default FormTextarea;
