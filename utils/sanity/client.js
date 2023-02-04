/* eslint-disable prettier/prettier */
import client from "@sanity/client";

export const sanityClient = client({
  projectId: "a54hzmlu",
  dataset: "production",
  apiVersion: "2021-10-21",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});
