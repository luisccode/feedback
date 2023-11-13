import { StarIcon } from "@/ui/icons";
import clsx from "clsx";
import { StarProps } from "./types";

export const Star = ({ number, rating, onChange }: StarProps) => {
  const isFilled = rating > number;
  const isCurrent = rating === number;

  let buttonClasses = clsx([
    "relative z-10 rounded-full w-full h-full",
    !isFilled && "hover:scale-110 transition-all duration-200",
    isCurrent && "bg-blue-500 scale-105",
    isFilled && "bg-red-500",
  ]);

  if (number === 1 && isFilled) buttonClasses += " rounded-r-none";
  if (number > 1 && isFilled) buttonClasses += " rounded-none";

  return (
    <div className="relative aspect-[1] flex justify-center items-center">
      {isCurrent && number != 1 && (
        <div className="absolute w-1/2 h-full bg-red-500 top-0 left-0 z-0"></div>
      )}

      <button
        className={buttonClasses}
        onClick={(e) => {
          e.preventDefault();
          onChange(number);
          if (isCurrent) onChange(0);
        }}
      >
        <div className="relative z-20 w-full md:w-[90%] mx-auto">
          <StarIcon color={isCurrent || isFilled ? "#fff" : "#8F90BE"} />

          <span
            className={clsx([
              isFilled || isCurrent ? "text-blue-500" : "text-white",
              "text-[10px] sm:text-[12px] font-bold absolute z-20 top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            ])}
          >
            {number}
          </span>
        </div>
      </button>
    </div>
  );
};
