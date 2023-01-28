import { post, slugs } from "@/lib/query";
import { PostDetails } from "tyings";
import { sanityClient } from "utils/sanity/client";

export default function Post(props: PostDetails) {
  console.log(props);
  return <div>This is detail page</div>;
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(slugs);

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: {
  params: { slug?: "" | undefined };
}) {
  const { slug = "" } = context.params;
  const data = await sanityClient.fetch(post, { slug });
  return {
    props: {
      data,
    },
  };
}