import Head from "next/head";

type HeadTagProp = {
  tag: string;
};

export default function HeadTag({ tag }: HeadTagProp) {
  return (
    <Head>
      <title>{tag}</title>
      <meta name="description" content="Frontend Mentor Job Board Challenge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="shortcut icon"
        href="/assets/favicon-32x32.png"
        type="image/x-icon"
      />
    </Head>
  );
}
