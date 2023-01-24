import Image from "next/image";
import { Icons } from "@/assets";
import classNames from "classnames";
import { CheckBox } from "tyings";

export default function CheckBox({ label, isChecked, onClick }: CheckBox) {
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

      <label
        className="font-bold capitalize text-16 text-primary-dark-blue dark:text-secondary-white"
        htmlFor="checkbox"
      >
        {label}
      </label>
    </div>
  );
}
