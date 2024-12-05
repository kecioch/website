"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../form/FormInput";
import FormTextarea from "../form/FormTextarea";
import { sendMail } from "@/services/mail/Nodemailer";
import LoadingSpinner from "../ui/LoadingSpinner";
import Toast, { ToastConfig } from "../ui/Toast";

interface FormInput {
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
  } = useForm<FormInput>();
  const [isSending, setIsSending] = useState(false);
  const [toastConfig, setToastConfig] = useState<ToastConfig>({ show: false });

  const submitHandler: SubmitHandler<FormInput> = async (data) => {
    setIsSending(true);
    const resultMail = await sendMail({
      senderEmail: data.email,
      subject: data.subject,
      message: data.message,
    });
    setIsSending(false);
    
    if (resultMail?.messageId) {
      setToastConfig({
        show: true,
        type: "success",
        message: "Message was successfully sent!",
      });
      reset();
    } else {
      setToastConfig({
        show: true,
        type: "error",
        message: "An unexpected error occured!",
      });
    }
  };

  const handleCloseToast = () => {
    setToastConfig((prev) => {
      return { ...prev, show: false };
    });
  };

  return (
    <div className="w-full md:w-[30em] min-h-72 bg-opacity-40 bg-indigo-950 rounded-lg overflow-hidden shadow-lg">
      {toastConfig?.show && (
        <Toast
          type={toastConfig.type}
          timeout={toastConfig.timeout}
          onClose={handleCloseToast}
        >
          {toastConfig.message}
        </Toast>
      )}
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
          disabled={isSending}
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
          disabled={isSending}
          register={register("subject", { required: "Required" })}
        />
        <FormTextarea
          id="message"
          label="Message"
          placeholder=""
          error={errors.message}
          disabled={isSending}
          register={register("message", { required: "Required" })}
        />
        <button
          className={`p-2 rounded-md transition-all ${
            isSending
              ? "bg-indigo-900 cursor-not-allowed"
              : "bg-indigo-800 hover:bg-indigo-700"
          }`}
          disabled={isSending}
        >
          <span className="flex justify-center items-center gap-2">
            {isSending ? "Sending message" : "Send"}
            {isSending && <LoadingSpinner />}
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
