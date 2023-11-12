import clsx from "clsx";
import { ButtonProps } from "./types";

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx([
        "w-[135px] h-[58px] p-[18px] bg-blue-500 rounded-lg flex justify-center items-center text-white font-bold",
        className,
      ])}
      {...props}
    >
      {children}
    </button>
  );
};
