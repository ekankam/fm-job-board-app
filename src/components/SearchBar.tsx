/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import classnames from "classnames";
import InputField from "@/ui/InputField";
import CheckBox from "@/ui/CheckBox";
import Button from "@/ui/Button";
import { Icons } from "@/assets";
import Image from "next/image";

type SearchBarProps = {
  values: {
    title: string;
    location: string;
    modalLocation: string;
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

function Divider({ className }: any) {
  return (
    <div
      className={classnames(
        "h-full w-[1px] bg-secondary-dark-gray absolute top-0 opacity-20",
        className
      )}
    />
  );
}


export default function SearchBar({
  values,
  onChange,
  isChecked,
  onCheck,
  onSearch,
  onOpenModal,
}: SearchBarProps) {
  return (
    <form className="flex absolute items-center md:w-[750px] w-full h-20 pl-4 pr-4 -translate-x-1/2 rounded-md shadow-sm bg-secondary-white dark:bg-primary-dark-blue xs-screen:top-24 md:top-32 left-1/2 py-7 lg:w-[1110px] gap-2 lg:pl xs-screen:w-[350px]">
      <div className="flex-1 sm:flex sm:items-center">
        <InputField
          alt="Search"
          icon={Icons.desktop.searchIcon}
          iconWidth={24}
          iconHeight={24}
          placeholder="Filter by title, companies, expertise…"
          name="title"
          onChange={onChange}
          value={values?.title}
        >
          <div onClick={onOpenModal} className="relative w-5 h-5 md:hidden">
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
          <button
            type="submit"
            onClick={onSearch}
            className="w-20 h-12 bg-primary-violet rounded-[5px] flex items-center justify-center md:hidden"
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
        </InputField>

      </div>
      <Divider className="md:left-[33%] md:block xs-screen:hidden" />
      <div className="xs-screen:hidden md:w-1/3 md:block">
        <InputField
          alt="Search"
          icon={Icons.desktop.locationIcon}
          iconWidth={17}
          iconHeight={24}
          placeholder="Filter by location…"
          name="location"
          onChange={onChange}
          value={values?.location}
        />
      </div>
      <Divider className="md:left-[66%] xs-screen:hidden md:block" />
      <div className="md:items-center md:justify-between md:flex-1 md:flex xs-screen:hidden">
        <CheckBox isChecked={isChecked} onClick={onCheck} />
        <Button
          variant="primary"
          label="Search"
          onClick={onSearch}
          type="submit"
          className="w-[177px] md:w-24"
        />
      </div>
    </form>
  );
}
