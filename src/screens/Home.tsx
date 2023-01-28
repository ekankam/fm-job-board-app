/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { useState } from "react";
import { motion } from "framer-motion";
import NavigationBar from "@/components/NavigationBar";
import InputField from "@/ui/InputField";
import { Icons } from "@/assets";
import CheckBox from "@/ui/CheckBox";
import Button from "@/ui/Button";
import PostCard from "@/ui/PostCard";
import { OverlayProps } from "tyings";

function Overlay({
  onChange,
  onCheck,
  onSearch,
  values,
  isModalOpen,
  isChecked,
  onClose,
}: OverlayProps) {
  return (
    <>
      {isModalOpen && (
        <motion.div
          className="fixed top-0 left-0 right-0 bottom-0 bg-[#00000080] h-screen flex items-center justify-center z-50"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="bg-secondary-white dark:bg-primary-dark-blue rounded-md w-[327px] mx-6 overflow-hidden pb-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 border-b border-solid border-[#6E809880]">
              <InputField
                alt="Location Icon"
                icon={Icons.desktop.locationIcon}
                iconWidth={17}
                iconHeight={24}
                placeholder="Filter by location..."
                onChange={onChange}
                value={values?.modalLocation}
                name="modalLocation"
              />
            </div>
            <div className="px-6 pt-[27px] flex flex-col gap-[29px]">
              <CheckBox isChecked={isChecked} onClick={onCheck} />
              <Button
                label="Search"
                type="submit"
                onClick={onSearch}
                variant="primary"
              />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

type HomeProps = {
  data: any[];
  handleFetchMorePosts: (React.MouseEventHandler<HTMLButtonElement> &
    React.MouseEventHandler<HTMLAnchorElement>)
  | undefined;
  isFetching: boolean;
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
};

export default function Home({ data, handleFetchMorePosts, isFetching, onChange, onSearch, values, onCheck, isChecked }: HomeProps) {
  const [isModaleOpen, setIsModaleOpen] = useState(false);

  const handleModalOpen = () => setIsModaleOpen(true);
  const handleModalClose = () => setIsModaleOpen(false);


  return (
    <div className="relative mb-14">
      <NavigationBar
        onOpenModal={handleModalOpen}
        onSearch={onSearch}
        onChange={onChange}
        values={values}
        onCheck={onCheck}
        isChecked={isChecked}
      />
      <Overlay
        onClose={handleModalClose}
        isModalOpen={isModaleOpen}
        isChecked={isChecked}
        onCheck={onCheck}
        onChange={onChange}
        onSearch={onSearch}
        values={values}
      />

      <div className="grid h-full grid-cols-1 pb-6 md:grid-cols-2 lg:grid-cols-3 gap-y-14 md:gap-y-10 lg:gap-y-12 place-items-center mt-28 lg:w-[1110px] mx-auto md:w-[750px] mb-14">
        {data?.map(
          ({
            _id,
            slug,
            postedAt,
            contract,
            position,
            company,
            location,
            logo,
            logoBackgroundColor,
          }) => (
            <PostCard
              key={_id}
              postedAt={postedAt}
              contract={contract}
              position={position}
              company={company}
              location={location}
              logo={logo}
              logoBackgroundColor={logoBackgroundColor}
              slug={slug}
            />
          )
        )}
      </div>
      {data.length > 0 && <div className="flex items-center justify-center w-full ">
        <Button
          label={isFetching ? 'Loading...' : 'Load More'}
          type="submit"
          onClick={handleFetchMorePosts}
          variant="primary"
        />
      </div>}
    </div>
  );
}