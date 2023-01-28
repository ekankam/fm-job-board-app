/* eslint-disable prettier/prettier */
import { Icons } from "@/assets";
import Switch from "@/ui/Switch";
import Image from "next/image";
import SearchBar from "./SearchBar";

type NavigationBarProps = {
  values: {
    title: string;
    location: string;
  };
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  isChecked: boolean;
  onCheck: React.MouseEventHandler<HTMLInputElement> | undefined;
  onSearch:
  | (React.MouseEventHandler<HTMLButtonElement> &
    React.MouseEventHandler<HTMLAnchorElement>)
  | undefined;
  onOpenModal: React.MouseEventHandler<HTMLDivElement>;
};

export default function NavigationBar({
  values,
  onChange,
  isChecked,
  onCheck,
  onSearch,
  onOpenModal,
}: NavigationBarProps) {
  return (
    <nav className="pt-8 px-6 h-[136px] md:h-40 xl:h-[162px] bg-no-repeat bg-mobile-header md:bg-tablet-header lg:bg-desktop-header bg-cover relative ">
      <div className="w-[340px] lg:w-[1110px] flex items-start justify-between mx-auto md:w-[750px] max-w-full">
        <div className="relative w-[115px] h-8">
          <Image
            alt="devjobs"
            src={Icons.desktop.logoIcon}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <Switch />
        <SearchBar
          onOpenModal={onOpenModal}
          onSearch={onSearch}
          onChange={onChange}
          values={values}
          onCheck={onCheck}
          isChecked={isChecked}
        />
      </div>
    </nav>
  );
}

