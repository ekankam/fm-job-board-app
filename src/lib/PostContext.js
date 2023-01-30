import React, { useState, useEffect, createContext } from "react";
import { sanityClient } from "utils/sanity/client";
import { fetchMorePosts, posts } from "./query";

const PostContext = createContext();

export function PostProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [formValues, setFormValues] = useState({
    title: "",
    location: "",
    modalLocation: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const results = await sanityClient.fetch(posts);
      setData(results);
      setFilteredData(results);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const getOnlyFullTimeJob = () => {
      const results = isChecked
        ? data?.filter((item) => item.contract === "Full Time")
        : data;
      setFilteredData(results);
    };

    getOnlyFullTimeJob();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.toLowerCase() });
  };

  const searchParams = ["position", "location", "company"];

  const handleSearch = (e) => {
    e.preventDefault();

    const results = [...data].filter((item) =>
      searchParams.some((param) =>
        item[param]
          ?.toLowerCase()
          .includes(
            formValues.title || formValues.location || formValues.modalLocation
          )
      )
    );

    setData(results);
    setFilteredData(results);
  };

  const handleCheck = () => {
    setIsChecked((prevState) => !prevState);
  };

  const handleLoadMorePost = async () => {
    setIsFetching(true);
    try {
      const lastId = data[data.length - 1]?._id;
      const response = await sanityClient.fetch(fetchMorePosts, { lastId });
      setData([...data, ...response]);
      setFilteredData([...filteredData, ...response]);
      setIsFetching(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PostContext.Provider
      value={{
        data,
        filteredData,
        handleChange,
        handleSearch,
        handleCheck,
        formValues,
        isChecked,
        isFetching,
        handleLoadMorePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export default PostContext;
