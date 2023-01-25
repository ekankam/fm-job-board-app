import { useState } from "react";
import classnames from "classnames";
import InputField from "@/ui/InputField";
import CheckBox from "@/ui/CheckBox";
import Button from "@/ui/Button";
import { Icons } from "@/assets";

const initialState = {
  search: "",
  location: "",
  isFullTime: false,
};

function Divider({ className }: any) {
  return (
    <div
      className={classnames(
        "h-full w-[1px] bg-secondary-dark-gray absolute top-0 opacity-20",
        className
      )}
    />
  );
}

export default function SearchBar() {
  const [filterValues, setFilterValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterValues({
      ...filterValues,
      [name]: value,
    });
  };

  const handleIsChecked = () => {
    setFilterValues({
      ...filterValues,
      isFullTime: !filterValues.isFullTime,
    });
  };

  const handleSubmit = () => {
    console.log("This is function to filter");
  };

  return (
    <form className="xs-screen:hidden md:inline-flex md:absolute md:items-center md:w-[750px] w-full md:h-20 md:pl-4 md:pr-4 md:-translate-x-1/2 md:rounded-md md:shadow-sm md:bg-secondary-white md:dark:bg-primary-dark-blue md:top-32 md:left-1/2 md:py-7 lg:w-[1110px] gap-2 lg:pl-8">
      <div className="flex-1">
        <InputField
          alt="Search"
          icon={Icons.desktop.searchIcon}
          iconWidth={24}
          iconHeight={24}
          placeholder="Filter by title, companies, expertise…"
          name="search"
          onChange={handleChange}
          value={filterValues.search}
        />
      </div>
      <Divider className="left-[33%]" />
      <div className="w-1/3">
        <InputField
          alt="Search"
          icon={Icons.desktop.locationIcon}
          iconWidth={17}
          iconHeight={24}
          placeholder="Filter by location…"
          name="location"
          onChange={handleChange}
          value={filterValues.location}
        />
      </div>
      <Divider className="left-[66%]" />
      <div className="flex items-center justify-between flex-1">
        <CheckBox
          isChecked={filterValues.isFullTime}
          onClick={handleIsChecked}
        />
        <Button
          variant="primary"
          label="Search"
          onClick={handleSubmit}
          type="submit"
          className="w-[177px] md:w-24"
        />
      </div>
    </form>
  );
}

/*
  <InputField
        alt="Search"
        icon={Icons.desktop.searchIcon}
        iconWidth={24}
        iconHeight={24}
        placeholder="Filter by title, companies, expertise…"
        name="search"
        onChange={handleChange}
        value={filterValues.search}
      />

      <Divider className="left-[32%]" />

      <InputField
        alt="Search"
        icon={Icons.desktop.locationIcon}
        iconWidth={17}
        iconHeight={24}
        placeholder="Filter by location…"
        name="location"
        onChange={handleChange}
        value={filterValues.location}
      />

      <Divider className="left-[64%]" />

      <CheckBox
        label="Full Time Only"
        isChecked={filterValues.isFullTime}
        onClick={handleIsChecked}
      />
      <Button
        variant="primary"
        label="Search"
        onClick={handleSubmit}
        type="submit"
        className="w-[177px]"
      />

*/
