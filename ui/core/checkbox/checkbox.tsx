import { Check } from "@/ui/icons";
import clsx from "clsx";
import { useState } from "react";
import { CheckboxProps } from "./types";

export const Checkbox = ({
  id,
  className,
  label,
  name,
  register,
  defaultValue = false,
}: CheckboxProps) => {
  const [checked, setChecked] = useState(defaultValue);

  return (
    <label
      htmlFor={id}
      className={clsx([
        "cursor-pointer w-full h-14  rounded-lg border  flex justify-start items-center",
        checked ? "bg-blue-500" : "bg-[#FCFCFE] border-[#E1E1EE]",
        className,
      ])}
    >
      <input
        type="checkbox"
        className="hidden"
        id={id}
        {...register(name)}
        checked={checked}
        onChange={(e) => {
          register(name).onChange(e);
          setChecked(e.target.checked);
        }}
        readOnly={true}
      />

      <div className="w-14 p-4 relative flex justify-center items-center">
        <div
          className={clsx([
            "w-6 h-6 rounded-lg",
            checked ? "bg-white" : "border-[3px] border-red-500",
          ])}
        />

        {checked && (
          <div className="absolute top-[20%] left-[40%]">
            <Check />
          </div>
        )}
      </div>

      <div
        className={clsx([
          "w-px h-14 relative ",
          checked ? "bg-white" : "bg-[#C5C6E1]",
        ])}
      />

      <div className="grow shrink basis-0 self-stretch px-4 py-3 justify-start items-center select-none flex">
        <span
          className={clsx([
            "grow shrink basis-0  text-lg font-bold",
            checked ? "text-white" : "text-purple-100",
          ])}
        >
          {label}
        </span>
      </div>
    </label>
  );
};
