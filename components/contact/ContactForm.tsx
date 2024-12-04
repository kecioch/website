"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../form/FormInput";
import FormTextarea from "../form/FormTextarea";

interface IFormInput {
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const submitHandler: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-full md:w-[30em] min-h-72 bg-opacity-40 bg-indigo-950 rounded-lg overflow-hidden shadow-lg">
      <form
        className="p-5 flex flex-col gap-8 mt-3"
        onSubmit={handleSubmit(submitHandler)}
      >
        <FormInput
          id="email"
          type="email"
          label="E-Mail"
          placeholder="E-Mail"
          error={errors.email}
          register={register("email", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid",
            },
          })}
        />
        <FormInput
          id="subject"
          type="text"
          label="Subject"
          placeholder="Subject"
          error={errors.subject}
          register={register("subject", { required: "Required" })}
        />
        <FormTextarea
          id="message"
          label="Message"
          placeholder=""
          error={errors.message}
          register={register("message", { required: "Required" })}
        />
        <button className="bg-indigo-800 p-2 rounded-md transition-all hover:bg-indigo-700">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
