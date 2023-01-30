import { useContext } from "react";
import PostContext from "@/lib/PostContext";
import Post from "./Post";
import { PostProps } from "tyings";

export default function Posts() {
  const { data, filteredData } = useContext(PostContext);

  const posts = filteredData.length > 0 ? filteredData : data;
  return (
    <>
      {posts.map(
        ({
          _id,
          company,
          contract,
          location,
          logo,
          logoBackgroundColor,
          position,
          postedAt,
          slug,
        }: PostProps) => (
          <Post
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
    </>
  );
}
