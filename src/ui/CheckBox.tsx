import Image from "next/image";
import { Icons } from "@/assets";
import classNames from "classnames";

type CheckBoxProps = {
  label: string;
  isChecked: boolean;
  onClick: React.MouseEventHandler<HTMLInputElement> | undefined;
};

export default function CheckBox({ label, isChecked, onClick }: CheckBoxProps) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={classNames(
          "relative w-6 h-6 bg-primary-dark-blue-100 hover:bg-primary-violet-300 rounded-[3px] flex items-center justify-center cursor-pointer dark:bg-secondary-white-200",
          { "bg-indigo-600 hover:bg-indigo-600": isChecked }
        )}
        onClick={onClick}
      >
        {isChecked && (
          <Image
            src={Icons.desktop.checkIcon}
            alt="Check Icon"
            width={13}
            height={9}
          />
        )}
      </div>

      <label
        className="font-bold capitalize text-16 text-primary-dark-blue"
        htmlFor="checkbox"
      >
        {label}
      </label>
    </div>
  );
}
