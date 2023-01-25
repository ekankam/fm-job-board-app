import { Icons } from "@/assets";
import Switch from "@/ui/Switch";
import Image from "next/image";
import SearchBar from "./SearchBar";

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

type DisplayImageProps = {
  src: string;
  className: string;
  alt: string;
};

function DisplayImage({ src, className, alt }: DisplayImageProps) {
  return (
    <Image
      alt={alt}
      src={src}
      layout="fill"
      objectFit="contain"
      className={className}
    />
  );
}

function MobileSearchBar({
  onOpenModal,
  onFilter,
  onChange,
  value,
}: MobileSearchBarProps) {
  return (
    <div className="absolute flex items-center h-20 gap-6 rounded-md bg-secondary-white dark:bg-primary-midnight dark:text-secondary-white-200 top-[100px] w-[340px] left-1/2 -translate-x-1/2 pl-6 pr-4 dark:shadow-lg md:hidden">
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
        <div onClick={onOpenModal} className="relative w-5 h-5">
          <DisplayImage
            src={Icons.mobile.filterIcon}
            className="dark:hidden"
            alt="Filter Icon"
          />
          <DisplayImage
            src={Icons.mobile.filterWhiteIcon}
            className="hidden dark:block"
            alt="Filter Icon"
          />
        </div>
      </div>
      <button
        type="submit"
        onClick={onFilter}
        className="w-12 h-12 bg-primary-violet rounded-[5px] flex items-center justify-center"
      >
        <div className="relative w-5 h-5 ">
          <Image
            alt="Search Icon"
            src={Icons.desktop.searchWhiteIcon}
            layout="fill"
            objectFit="contain"
          />
        </div>
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
        <SearchBar />
        <MobileSearchBar
          onOpenModal={onOpenModal}
          onFilter={onFilter}
          onChange={onChange}
          value={value}
        />
      </div>
    </nav>
  );
}

// lg:px-28 2xl:px-40
