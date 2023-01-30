import { post, slugs } from "@/lib/query";
import { PostDetailsProps } from "tyings";
import { sanityClient } from "utils/sanity/client";

export default function Post(props: PostDetailsProps) {
  return <div>This is detail page {props.data.company}</div>;
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
