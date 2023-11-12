import clsx from "clsx";
import { Star } from "./star";
import { StarRatingProps } from "./types";

export const StarRating = ({
  onChange,
  rating,
  className,
}: StarRatingProps) => {
  return (
    <div
      className={clsx([
        "max-w-[520px] px-1 bg-[#F8F8FC] border border-[#E1E1EE] rounded-[100px] grid grid-cols-10 items-center",
        className,
      ])}
    >
      {[...Array(10)].map((_, index) => (
        <Star
          key={index + 1}
          number={index + 1}
          rating={rating}
          onChange={onChange}
        />
      ))}
    </div>
  );
};
