import { useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

type SwitchProps = {
  isClicked: boolean;
  onClick: () => void;
}
const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30
};

export default function Switch({ isClicked, onClick }: SwitchProps) {
  return (
    <div className={classNames("w-12 bg-white rounded-xl p-[5px] cursor-pointer group flex justify-start", { 'justify-end': isClicked })} onClick={onClick}>
      <motion.div className="bg-violet-700 w-[14px] h-[14px]  rounded-full group-hover:bg-violet-500" layout transition={spring} />
    </div>
  );
}     
