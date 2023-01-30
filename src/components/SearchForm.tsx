import { useContext } from "react";
import Image from "next/image";
import PostContext from "@/lib/PostContext";
import ModalContext from "@/lib/ModalContext";
import cn from "classnames";
import { Icons } from "@/assets";
import Button from "@/ui/Button";
import CheckBox from "@/ui/CheckBox";

type IconProps = {
  src: string;
  className?: string;
  alt: string;
};

function Icon({ src, className, alt }: IconProps) {
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

interface InputFieldProps {
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder: string;
  value: string;
}

function InputField({ name, onChange, placeholder, value }: InputFieldProps) {
  return (
    <input
      className="w-4/5 search-input"
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
    />
  );
}

function Divider({ className }: any) {
  return (
    <div
      className={cn(
        "h-full w-[1px] bg-secondary-dark-gray absolute top-0 opacity-20",
        className
      )}
    />
  );
}

export default function SearchForm() {
  const { handleChange, handleSearch, handleCheck, formValues, isChecked } =
    useContext(PostContext);
  const { handleModalOpen } = useContext(ModalContext);
  useContext(PostContext);
  return (
    <form className="absolute w-[335px] -top-40 bg-secondary-white dark:bg-primary-dark-blue h-20 left-1/2 -translate-x-1/2 rounded-md flex items-center px-4 md:gap-2 md:w-[750px] lg:w-[1110px]">
      <div className="flex items-center flex-1 w-full">
        <div className="relative hidden w-6 h-6 mr-4 md:block">
          <Icon src={Icons.desktop.searchIcon} alt="Search" />
        </div>
        <InputField
          name="title"
          onChange={handleChange}
          placeholder="Filter by title, companies, expertise…"
          value={formValues?.title}
        />
        <div className="flex items-center gap-2 ml-3 md:ml-0">
          <div
            onClick={handleModalOpen}
            className="relative w-5 h-5 cursor-pointer md:hidden"
          >
            <Icon
              src={Icons.mobile.filterIcon}
              className="dark:hidden"
              alt="Filter Icon"
            />
            <Icon
              src={Icons.mobile.filterWhiteIcon}
              className="hidden dark:block"
              alt="Filter Icon"
            />
          </div>
          <button
            type="submit"
            onClick={handleSearch}
            className="w-12 h-12 bg-primary-violet rounded-[5px] flex items-center justify-center md:hidden"
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
      </div>
      <Divider className="hidden md:left-[33%] md:block " />
      <div className="hidden gap-4 md:flex-1 md:flex md:items-center">
        <div className="relative w-[17px] h-6">
          <Icon src={Icons.desktop.locationIcon} alt="location" />
        </div>
        <InputField
          name="location"
          onChange={handleChange}
          placeholder="Filter by location…"
          value={formValues?.location}
        />
      </div>
      <Divider className="hidden md:left-[65%] md:block" />
      <div className="justify-between hidden md:flex-1 md:flex md:items-center">
        <CheckBox isChecked={isChecked} onClick={handleCheck} />
        <Button
          variant="primary"
          label="Search"
          onClick={handleSearch}
          type="submit"
          className="w-[177px] md:w-24 lg:w-32"
        />
      </div>
    </form>
  );
}
