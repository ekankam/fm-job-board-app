import { useState } from "react";
import { motion } from "framer-motion";
import NavigationBar from "@/components/NavigationBar";
import InputField from "@/ui/InputField";
import { Icons } from "@/assets";
import CheckBox from "@/ui/CheckBox";
import Button from "@/ui/Button";
import PostCard from "@/ui/PostCard";
import { Posts, Overlay } from "tyings";

function Overlay({
  onChange,
  onCheck,
  onSearch,
  value,
  isModalOpen,
  isChecked,
  onClose,
}: Overlay) {
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
                value={value}
                name="location"
              />
            </div>
            <div className="px-6 pt-[27px] flex flex-col gap-[29px]">
              <CheckBox
                label="full time only"
                isChecked={isChecked}
                onClick={onCheck}
              />
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

const initialValues = {
  title: "",
  location: "",
};

const Home = ({ data }: Posts) => {
  const [isModaleOpen, setIsModaleOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [values, setValues] = useState(initialValues);

  const handleModalOpen = () => setIsModaleOpen(true);
  const handleModalClose = () => setIsModaleOpen(false);
  const handleCheckbox = () => setIsChecked(!isChecked);

  // eslint-disable-next-line prettier/prettier, @typescript-eslint/no-explicit-any
  const handleInputChange = (e: { target: { value: any; name: any; } }) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSearch = () => {
    console.log("Function for searching jobs");
  };

  const handleFilterLocationPosition = () => {
    console.log("Function for searching jobs");
  };

  return (
    <div>
      <NavigationBar
        onOpenModal={handleModalOpen}
        onFilter={handleFilterLocationPosition}
        onChange={handleInputChange}
        value={values.title}
      />
      <Overlay
        onClose={handleModalClose}
        isModalOpen={isModaleOpen}
        isChecked={isChecked}
        onCheck={handleCheckbox}
        onChange={handleInputChange}
        onSearch={handleSearch}
        value={values.location}
      />

      <div className="grid h-full grid-cols-1 pb-6 md:grid-cols-2 lg:grid-cols-3 gap-y-14 md:gap-y-10 lg:gap-y-12 place-items-center mt-28 lg:w-[1110px] mx-auto">
        {data?.map(
          ({
            _id,
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
            />
          )
        )}
      </div>
    </div>
  );
};

export default Home;
