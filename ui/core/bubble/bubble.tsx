import { Triangle } from "@/ui/icons";
import clsx from "clsx";
import { BubbleProps } from "./types";

export const Bubble = ({
  background = "bg-white",
  triangleColor,
  className,
  children,
}: BubbleProps) => {
  return (
    <div
      className={clsx([
        " rounded-2xl shadow-lg p-8 lg:p-12 relative",
        className,
        background,
      ])}
    >
      {children}

      <div className="w-2 h-3.5 absolute -left-2 top-[50px]">
        <Triangle color={triangleColor} />
      </div>
    </div>
  );
};
