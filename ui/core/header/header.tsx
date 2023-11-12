import ButterFlyIcon from "@/ui/icons/butterfly";
import { HeaderProps } from "./types";

export const Header = ({ progress = 10 }: HeaderProps) => {
  return (
    <header className="w-[95vw] lg:w-[98vw] mx-auto">
      <div className="h-1 bg-[#EDEDF5] overflow-hidden rounded-lg w-full my-4">
        <div
          className="h-1 bg-blue-500 transition-all"
          style={{ width: progress + "%" }}
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="w-9">
          <ButterFlyIcon />
        </div>

        <h1 className="font-bold text-sm">ButterFly AI</h1>
      </div>
    </header>
  );
};
