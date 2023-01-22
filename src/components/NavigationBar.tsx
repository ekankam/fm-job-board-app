import { Icons } from "@/assets";
import Logo from "@/ui/Logo";
import Switch from "@/ui/Switch";
import Image from "next/image";

type MobileSearchBarProps = {
  onOpenModal: React.MouseEventHandler<HTMLDivElement>;
  onFilter?: React.MouseEventHandler<HTMLButtonElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
};

type NavigationBarProps = {
  onOpenModal: React.MouseEventHandler<HTMLDivElement>;
  onFilter?: React.MouseEventHandler<HTMLButtonElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
};

function MobileSearchBar({
  onOpenModal,
  onFilter,
  onChange,
  value,
}: MobileSearchBarProps) {
  return (
    <div className="absolute flex items-center h-20 gap-6 rounded-md bg-secondary-white dark:bg-primary-midnight dark:text-secondary-white-200 md:hidden top-[100px] w-[340px] left-1/2 -translate-x-1/2 pl-6 pr-4 dark:shadow-lg">
      <div className="flex items-center gap-2">
        <input
          type="text"
          name="title"
          id="search"
          value={value}
          onChange={onChange}
          placeholder="Filter by title..."
          className="py-4 border-none outline-none text-16 text-primary-dark-blue placeholder:text-primary-dark-blue-200 bg-inherit dark:text-secondary-white dark:placeholder:text-secondary-white-200 caret-primary-violet"
        />
        <div onClick={onOpenModal}>
          <Image
            alt="Filter Icon"
            src={Icons.mobile.filterIcon}
            width={19.97}
            height={20}
            className="dark:hidden"
          />
          <Image
            alt="Filter Icon"
            src={Icons.mobile.filterWhiteIcon}
            width={19.97}
            height={20}
            className="hidden dark:block"
          />
        </div>
      </div>
      <button
        type="submit"
        onClick={onFilter}
        className="w-12 h-12 bg-primary-violet rounded-[5px] flex items-center justify-center"
      >
        <Image
          alt="Search Icon"
          src={Icons.desktop.searchWhiteIcon}
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}

export default function NavigationBar({
  onOpenModal,
  onFilter,
  onChange,
  value,
}: NavigationBarProps) {
  return (
    <nav className="flex items-start justify-between pt-8 px-6 h-[136px] md:h-40 xl:h-[162px] bg-no-repeat bg-mobile-header md:bg-tablet-header lg:bg-desktop-header bg-cover relative lg:px-28 2xl:px-40">
      <Logo
        alt="devjobs"
        icon={Icons.desktop.logoIcon}
        iconWidth={115}
        iconHeight={32}
      />
      <Switch />
      <MobileSearchBar
        onOpenModal={onOpenModal}
        onFilter={onFilter}
        onChange={onChange}
        value={value}
      />
    </nav>
  );
}
