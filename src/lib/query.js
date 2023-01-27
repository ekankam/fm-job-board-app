import groq from "groq";

export const posts = groq`
*[_type=="job"] | order(_id) [0...10] {
  _id,
    postedAt,
    contract,
    position,
    company,
    location,
    logo,
    logoBackgroundColor,
    slug,
}
`;

export const post = groq`
  *[_type == "job" && slug.current == $slug][0]
`;

export const slugs = groq`
*[_type == "job" && defined(slug.current)][].slug.current
`;

export const fetchMorePosts = groq`
*[_type == "job" && _id > $lastId] | order(_id) [0...10] {
   _id,
    postedAt,
    contract,
    position,
    company,
    location,
    logo,
    logoBackgroundColor,
    slug,
}`;
