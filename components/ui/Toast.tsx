import React, { useEffect, useState } from "react";

export type ToastType = "success" | "error";

export interface ToastConfig {
  show: boolean;
  type?: ToastType;
  message?: string;
  timeout?: number;
}

interface Props {
  type?: ToastType;
  children?: React.ReactNode;
  onClose?: () => void;
  timeout?: number;
}

const Toast = ({
  type = "success",
  children,
  onClose,
  timeout = 4000,
}: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    setTimeout(() => {
      onClose && onClose();
    }, timeout);
  }, [onClose, timeout]);

  return (
    <div
      className={`w-full h-20 fixed z-30 bottom-0 lg:bottom-5 left-0 flex justify-center backdrop-blur-sm transition-all ${
        !show && "translate-y-20 opacity-0"
      }`}
      onClick={() => onClose && onClose()}
    >
      <div
        className={`w-full lg:max-w-[60em] h-20 rounded-t-lg rounded-b-none lg:rounded-b-lg flex justify-center items-center opacity-85 ${
          type === "success" ? "bg-green-800" : "bg-red-800"
        }`}
      >
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Toast;
