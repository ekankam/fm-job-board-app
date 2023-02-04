/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { useContext } from "react";
import PostContext from "@/lib/PostContext";
import HeadTag from "@/components/HeadTag";
import Posts from "@/components/posts";
import SearchForm from "@/components/SearchForm";
import Button from "@/ui/Button";
import Modal from "@/components/Modal";

export default function Home() {
  const { data, isFetching, handleLoadMorePost } = useContext(PostContext);

  return (
    <>
      <HeadTag tag="devjobs | Home" />

      <div className="relative grid-container mb-14">
        <SearchForm />
        <Posts />
      </div>
      {data.length > 0 && (
        <div className="flex items-center justify-center w-full mb-14">
          <Button
            label={isFetching ? "Loading..." : "Load More"}
            type="submit"
            onClick={handleLoadMorePost}
            variant="primary"
          />
        </div>
      )}
      <Modal />
    </>
  );
}
