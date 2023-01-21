import Image from "next/image";

type InputFieldProps = {
  alt: string;
  icon: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
  iconWidth: number | undefined;
  iconHeight: number | undefined;
};

export default function InputField({
  alt,
  icon,
  iconWidth,
  iconHeight,
  placeholder,
  onChange,
  value,
}: InputFieldProps) {
  return (
    <div className="flex items-center gap-4 cursor-pointer">
      <Image src={icon} alt={alt} width={iconWidth} height={iconHeight} />
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="w-full py-4 pr-2 text-base border-none outline-none text-dark-blue placeholder:text-dark-blue caret-violet-500 "
      />
    </div>
  );
}
