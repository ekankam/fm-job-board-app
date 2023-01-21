import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import classNames from "classnames";
import { Icons } from "@/assets";
import Image from "next/image";

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

export default function Switch(): JSX.Element | null {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center gap-4">
      <Image
        alt="Sun Icon"
        src={Icons.desktop.sunIcon}
        width="20"
        height="18"
      />
      <div
        className={classNames(
          "w-12 bg-white rounded-xl p-[5px] cursor-pointer group flex justify-start",
          { "justify-end": theme === "dark" }
        )}
        onClick={handleTheme}
      >
        <motion.div
          className="bg-violet-700 w-[14px] h-[14px]  rounded-full group-hover:bg-violet-500"
          layout
          transition={spring}
        />
      </div>
      <Image
        alt="Moon Icon"
        src={Icons.desktop.moonIcon}
        width="12"
        height="12"
      />
    </div>
  );
}
