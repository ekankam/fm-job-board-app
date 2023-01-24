import { sanityClient } from "utils/sanity/client";
import { post } from "./query";

export async function getData() {
  const data = await sanityClient(post);
  return data;
}
