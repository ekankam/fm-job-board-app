import Image from "next/image";
import { Icons } from "@/assets";
import classNames from "classnames";
import { CheckBoxProps } from "tyings";

const Label = () => {
  return (
    <>
      <label
        className="font-bold capitalize xs-screen:hidden md:block text-16 text-primary-dark-blue dark:text-secondary-white lg:hidden"
        htmlFor="checkbox"
      >
        Full Time
      </label>
      <label
        className="font-bold capitalize md:hidden text-16 text-primary-dark-blue dark:text-secondary-white lg:block"
        htmlFor="checkbox"
      >
        Full Time Only
      </label>
    </>
  );
};

export default function CheckBox({ isChecked, onClick }: CheckBoxProps) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={classNames(
          "relative w-6 h-6 bg-primary-dark-blue-100 hover:bg-primary-violet-300 rounded-[3px] flex items-center justify-center cursor-pointer dark:bg-secondary-white-200",
          { "bg-indigo-600 hover:bg-indigo-600": isChecked },
          { "dark:bg-indigo-600 dark:hover:bg-indigo-600": isChecked }
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

      <Label />
    </div>
  );
}
