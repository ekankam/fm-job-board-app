import HeadTag from "@/components/HeadTag";
import { post } from "@/lib/query";
import { Posts } from "tyings";
import { sanityClient } from "utils/sanity/client";
import Home from "./Home";

export default function Layout({ data }: Posts) {
  return (
    <div>
      <HeadTag tag="devjobs | Home" />
      <main className="min-h-screen h-full max-w-[1440px] w-full mx-auto font-normal min-w-[375px] xs-screen:overflow-x-auto">
        <Home data={data} />
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const data = await sanityClient.fetch(post);

  return {
    props: { data },
  };
};
