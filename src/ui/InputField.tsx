import Image from "next/image";
import { InputFieldProps } from "tyings";

export default function InputField({
  alt,
  icon,
  iconWidth,
  iconHeight,
  placeholder,
  name,
  onChange,
  value,
}: InputFieldProps) {
  return (
    <div className="flex items-center w-full gap-4 cursor-pointer bg-secondary-white dark:bg-primary-dark-blue">
      <Image src={icon} alt={alt} width={iconWidth} height={iconHeight} />

      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        className="w-full py-4 pr-2 border-none outline-none text-16 text-primary-dark-blue placeholder:text-primary-dark-blue placeholder:text-opacity-50 caret-primary-violet dark:placeholder:text-secondary-white bg-inherit dark:placeholder:text-opacity-50 dark:text-secondary-white"
        autoComplete="false"
      />
    </div>
  );
}
