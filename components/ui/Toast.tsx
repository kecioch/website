import React from "react";

export type ToastType = "success" | "error";

interface Props {
  type: ToastType;
  children: React.ReactNode;
}

const Toast = ({ type, children }: Props) => {
  return (
    <div className="w-full h-20 fixed z-30 bottom-0 lg:bottom-5 left-0 flex justify-center backdrop-blur-sm ">
      <div
        className={`w-full lg:max-w-[60em] h-20 rounded-lg flex justify-center items-center opacity-85 ${
          type === "success" ? "bg-green-800" : "bg-red-800"
        }`}
      >
        <p className="">{children}</p>
      </div>
    </div>
  );
};

export default Toast;
