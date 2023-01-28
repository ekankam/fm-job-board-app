/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { useState, useEffect } from "react";
import HeadTag from "@/components/HeadTag";
import { fetchMorePosts, posts } from "@/lib/query";
import { sanityClient } from "utils/sanity/client";
import Home from "../screens/Home";

const initialValues = {
  title: "",
  location: "",
  modalLocation: "",
};

export default function Layout() {
  const [data, setData] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    const fetchData = async () => {
      const data = await sanityClient.fetch(posts);
      setData(data);
    };

    fetchData();
  }, []);

  const handleFetchMorePosts = async () => {
    setIsFetching(true);
    try {
      const lastId = data[data.length - 1]?._id;
      const response = await sanityClient.fetch(fetchMorePosts, { lastId });
      setData([...data, ...response]);
      setIsFetching(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e: {
    preventDefault: () => void;
    target: { name: any; value: any };
  }) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  console.log(values);

  return (
    <div>
      <HeadTag tag="devjobs | Home" />
      <main className="min-h-screen h-full max-w-[1440px] w-full mx-auto font-normal min-w-[375px] xs-screen:overflow-x-auto">
        <Home
          data={data}
          handleFetchMorePosts={handleFetchMorePosts}
          isFetching={isFetching}
          onChange={handleInputChange}
        />
      </main>
    </div>
  );
}
