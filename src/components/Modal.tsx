import { useContext } from "react";
import ModalContext from "@/lib/ModalContext";
import PostContext from "@/lib/PostContext";
import { motion } from "framer-motion";
import CheckBox from "@/ui/CheckBox";
import Button from "@/ui/Button";
import Image from "next/image";
import { Icons } from "@/assets";
export default function Modal() {
  const { isChecked, handleCheck, handleSearch, handleChange, formValues } =
    useContext(PostContext);
  const { handleModalClose, isModalOpen } = useContext(ModalContext);

  return (
    <>
      {isModalOpen && (
        <motion.div
          className="fixed top-0 left-0 right-0 bottom-0 bg-[#00000080] h-screen flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleModalClose}
        >
          <div
            className="bg-secondary-white dark:bg-primary-dark-blue rounded-md w-[327px] mx-6 overflow-hidden pb-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center flex-1 w-full gap-4 px-4 py-6 border-b border-solid border-[#6E809880]">
              <div className="relative w-[17px] h-6">
                <Image
                  src={Icons.desktop.locationIcon}
                  alt="Location"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <input
                className="w-4/5 search-input"
                type="text"
                placeholder="Filter by location..."
                onChange={handleChange}
                name="modalLocation"
                value={formValues?.modalLocation}
              />
            </div>
            <div className="px-6 pt-[27px] flex flex-col gap-[29px]">
              <CheckBox isChecked={isChecked} onClick={handleCheck} />

              <Button
                label="Search"
                type="submit"
                onClick={handleSearch}
                variant="primary"
              />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
