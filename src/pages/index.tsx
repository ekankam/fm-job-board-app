/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { useState, useEffect } from "react";
import HeadTag from "@/components/HeadTag";
import { fetchMorePosts, posts } from "@/lib/query";
import { Post, Posts } from "tyings";
import { sanityClient } from "utils/sanity/client";
import Home from "../screens/Home";

export default function Layout() {
  const [data, setData] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(false);

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

  return (
    <div>
      <HeadTag tag="devjobs | Home" />
      <main className="min-h-screen h-full max-w-[1440px] w-full mx-auto font-normal min-w-[375px] xs-screen:overflow-x-auto">
        <Home
          data={data}
          handleFetchMorePosts={handleFetchMorePosts}
          isFetching={isFetching}
        />
      </main>
    </div>
  );
}
