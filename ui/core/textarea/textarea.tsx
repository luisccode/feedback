import clsx from "clsx";
import { TextAreaProps } from "./types";

export const Textarea = ({
  placeholder,
  name,
  className,
  register,
  error,
}: TextAreaProps) => {
  return (
    <>
      <textarea
        className={clsx([
          "w-full h-[120px] text-lg px-6 py-3 bg-white rounded-lg border border-[#E1E1EE] placeholder:text-blue-500 text-blue-500 resize-none outline-none",
          className,
        ])}
        placeholder={placeholder}
        {...register(name)}
      />

      {error && (
        <p className="text-red-500 font-bold text-[12px] mt-1">{error}</p>
      )}
    </>
  );
};
